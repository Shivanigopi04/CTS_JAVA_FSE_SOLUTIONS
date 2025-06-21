

public class FinancialForecastWithAnalysis {

    /**
     * 📌 Recursive Forecast Function
     * Formula: FV = PV * (1 + r)^n
     *
     * Time Complexity: O(n)
     * - Each call reduces 'years' by 1 → n recursive calls.
     * - Not optimal for large n due to deep call stack.
     *
     * Space Complexity: O(n)
     * - Each recursive call is placed on the call stack.
     *
     * ⚠️ Problem: For large 'years', may cause stack overflow or redundant calculations.
     */
    public static double futureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    /**
     * ✅ Optimized Forecast using Memoization
     *
     * Time Complexity: O(n)
     * - Each year is computed only once and stored in memo[].
     *
     * Space Complexity: O(n)
     * - Uses memo[] array to store intermediate values.
     *
     * ✅ Benefits:
     * - Avoids recalculating the same year’s value.
     * - Prevents deep recursion for large n.
     */
    public static double futureValueMemoized(double presentValue, double growthRate, int years, double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != 0) return memo[years];
        memo[years] = futureValueMemoized(presentValue, growthRate, years - 1, memo) * (1 + growthRate);
        return memo[years];
    }

    /**
     * 🚀 Iterative Version (Most Efficient)
     *
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * ✅ Recommended for real-time applications.
     */
    public static double futureValueIterative(double presentValue, double growthRate, int years) {
        double value = presentValue;
        for (int i = 1; i <= years; i++) {
            value *= (1 + growthRate);
        }
        return value;
    }
}
