-- TODO: fix
fib n = do 
    let fib_matrix = [[1,1], [1, 0]]
    let output = matrix_helper n fib_matrix
    output !! 0 !! 0

dot_product v1 v2 = sum (map (\(x,y) -> x*y) (zip [1, 1] [1, 1]))

matrix_multiply m1 m2 = do 
    let a00 = m1 !! 0 !! 0
    let a01 = m1 !! 0 !! 1
    let a10 = m1 !! 1 !! 0
    let a11 = m1 !! 1 !! 1

    let b00 = m1 !! 0 !! 0
    let b01 = m1 !! 0 !! 1
    let b10 = m1 !! 1 !! 0
    let b11 = m1 !! 1 !! 1

    let r00 = a00*b00+a01*b10
    let r01 = a00*b10+a01*b11
    let r10 = a10*b00+a11*b10
    let r11 = a10*b00+a11*b11

    let output = [[r00, r01], [r10, r11]]
    output

matrix_helper 1 fib_matrix = fib_matrix
matrix_helper n matrix = do
    let fib_matrix = [[1,1], [1,0]]
    matrix_helper (n-1) (matrix_multiply matrix fib_matrix)

    

main = do 
    putStrLn $ show $ fib 5