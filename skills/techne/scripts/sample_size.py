#!/usr/bin/env python3
"""Sample size / duration for a two-arm A/B test on a conversion rate.

Usage:
  python3 sample_size.py --baseline 0.12 --mde 0.05 [--relative] [--alpha 0.05] [--power 0.8] [--daily 20000] [--arms 2]

--mde is absolute (0.01 = +1pp) unless --relative is passed (0.05 = +5% relative).
--daily is total eligible users per day across all arms; prints the estimated duration.
"""
import argparse, math
from statistics import NormalDist


def per_arm(p1, p2, alpha, power):
    z_a = NormalDist().inv_cdf(1 - alpha / 2)
    z_b = NormalDist().inv_cdf(power)
    p_bar = (p1 + p2) / 2
    num = (z_a * math.sqrt(2 * p_bar * (1 - p_bar)) + z_b * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2
    return math.ceil(num / (p2 - p1) ** 2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--baseline", type=float, required=True)
    ap.add_argument("--mde", type=float, required=True)
    ap.add_argument("--relative", action="store_true")
    ap.add_argument("--alpha", type=float, default=0.05)
    ap.add_argument("--power", type=float, default=0.8)
    ap.add_argument("--daily", type=float)
    ap.add_argument("--arms", type=int, default=2)
    a = ap.parse_args()
    p2 = a.baseline * (1 + a.mde) if a.relative else a.baseline + a.mde
    if not 0 < p2 < 1:
        raise SystemExit("baseline + mde must stay within (0, 1)")
    n = per_arm(a.baseline, p2, a.alpha, a.power)
    print(f"baseline {a.baseline:.4f} -> target {p2:.4f} (abs diff {p2 - a.baseline:+.4f}, rel {(p2 / a.baseline - 1):+.1%})")
    print(f"users per arm: {n:,}   total ({a.arms} arms): {n * a.arms:,}")
    if a.daily:
        days = math.ceil(n * a.arms / a.daily)
        weeks = math.ceil(days / 7)
        print(f"duration: ~{days} days -> run {weeks} full week(s) (round up to whole weeks for weekday effects)")
        if days > 42:
            print("WARNING: > 6 weeks. Test a bolder change, a higher-traffic step, a more sensitive metric, or don't A/B test.")


if __name__ == "__main__":
    main()
