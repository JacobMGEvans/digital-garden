// Will need special Babel support
const double = n => n * 2;
const increment = n => n + 1;

// with pipeline operator
5 |> double |> double |> increment |> double; // 42
