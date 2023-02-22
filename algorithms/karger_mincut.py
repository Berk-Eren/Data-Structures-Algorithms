import random
import copy


def select_pair(data):
    p1 = random.choice(list(data.keys()))
    p2 = random.choice(data[p1])

    return p1, p2

def merge(data, p1, p2):
    data[p1] = [vertex for vertex in data[p1] if vertex!=p2]

    for vertex in data[p2]:
        if vertex!=p1:
            data[p1].append(vertex)
            data[vertex] = [v for v in data[vertex] if v!=p2] # remove p2 from connections
            data[vertex].append(p1)

    del data[p2]

def karger_mincut(data):
    while len(data)>2:
        p1, p2 = select_pair(data)
        merge(data, p1, p2)

    for key in data:
        return len(data[key])


# Read data
with open("min_cut_numbers.txt", "r") as f:
    data = {}

    for vertices in f.readlines():
        vertices_list = vertices.split()
        data[vertices_list[0].strip()] = [vertice.strip() for vertice in vertices_list[1:]]


min_list = []

for _ in range(10):
    min_list.append(
        karger_mincut(
            copy.deepcopy(data)
        )
    )


print(min(min_list))
