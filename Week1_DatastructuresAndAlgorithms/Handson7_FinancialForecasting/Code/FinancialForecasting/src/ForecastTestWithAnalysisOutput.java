

public class ForecastTestWithAnalysisOutput {
    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate = 0.10; // 10%
        int years = 10;

        System.out.println("📊 Financial Forecasting Tool\n");

        // Recursive
        System.out.println("🔁 Recursive Forecast:");
        double value1 = FinancialForecastWithAnalysis.futureValueRecursive(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, value1);
        System.out.println("⏱ Time Complexity: O(n)");
        System.out.println("⚠️  May lead to stack overflow or slow performance for large years.\n");

        // Memoized
        System.out.println("💡 Memoized Recursive Forecast:");
        double[] memo = new double[years + 1];
        double value2 = FinancialForecastWithAnalysis.futureValueMemoized(presentValue, growthRate, years, memo);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, value2);
        System.out.println("⏱ Time Complexity: O(n)");
        System.out.println("✅ Optimized by storing results to avoid repeated computation.\n");

        // Iterative
        System.out.println("🚀 Iterative Forecast:");
        double value3 = FinancialForecastWithAnalysis.futureValueIterative(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, value3);
        System.out.println("⏱ Time Complexity: O(n)");
        System.out.println("💯 Most efficient. Uses constant space and is fast even for large years.\n");

        // Recommendation
        System.out.println("📌 Recommendation:");
        System.out.println("""
        ✔️ Use the Iterative approach in real applications for best performance and memory efficiency.
        ❗ Avoid pure recursion in production as it may crash with deep call stacks.
        ✨ Memoization is a good middle-ground if recursion must be used.
        """);
    }
}
