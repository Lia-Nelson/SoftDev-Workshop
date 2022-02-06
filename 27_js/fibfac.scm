; Team Apples Oranges :: Ishraq Mahid, Naomi Naranjo, Julia Nelson
; SoftDev pd1
; K27 -- Basic functions in JavaScript
; 2022-02-04

(define fact
  (lambda (n)
    (if (= n 1)
        1
        (* n (fact (- n 1)))
        )
    )
  )

(fact 1)
(fact 2)
(fact 3)
(fact 4)

(define fib
  (lambda (n)
    (if (<= n 1)
        n
        (+ (fib (- n 1)) (fib (- n 2)))
        )
    )
  )

(fib -1)
(fib 0)
(fib 1)
(fib 2)
(fib 3)
(fib 4)
(fib 5)
