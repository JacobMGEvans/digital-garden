pub fn subtract_product_and_sum(n: i32) -> i32 {
    let sum = n.to_string().chars().fold(0, |acc, x| {
        acc + x.to_digit(10).unwrap() as i32
    });
    let product = n.to_string().chars().fold(1, |acc, x| {
        acc * x.to_digit(10).unwrap() as i32
    });
    product - sum
}

println!{subtract_product_and_sum(123)}