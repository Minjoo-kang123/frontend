package = []
single = []
n, m = map(int, input().split())
for i in range(m):
    a, b = map(int, input().split())
    if a == 0 or b == 0:
        print(0)
        exit()
    package.append(a)
    single.append(b)

package.sort() #최솟값 얻기
single.sort() #최솟값 얻기

if single[0] * 6 < package[0]:
    print(single[0] * n)
    exit()

sum1 = (n // 6) * package[0] + ((n % 6 + 6) // 6)* package[0]
sum2 = (n // 6) * package[0] + n % 6 * single[0] 


print(sum1 if sum1 < sum2 else sum2)