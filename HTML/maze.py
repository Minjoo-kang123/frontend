'''
미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 
이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 
지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 
한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.
'''

ax = [1, -1, 0, 0]
ay = [0, 0, 1, -1]

visited = list()

n, m = input().split(" ")
n = int(n)
m = int(m)
maze = list()
visited = [[0 for i in range (m)] for j in range(n)]
for i in range(n):
    strs = str(input())
    maze.append(list(strs))
print(visited, maze)

count = 1

def ma(x, y, count):
    if  x < 0 or y < 0 or x >= m or y >= n:
        return
    print(x, y, count)
    if x == m - 1 and y == n - 1:
        print (count)
        exit()
    for i in range(4):
        mx = x + ax[i]
        my = y + ay[i]
        if  0 <= mx < y and 0<= my < n and maze[mx][my] == '1':
            print(mx, my, count)
            if visited[mx][my] == 0:
                print(2)
                visited[mx][my] = 1
                ma(mx, my, count + 1)
                visited[mx][my] = 0
        return count

ma(0, 0,1)
        