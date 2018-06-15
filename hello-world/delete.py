def magicMatrix(data):
	coloumn_length = len(data[0])
	row_length = len(data)
	result = 0
	for i in range(row_length):
		for j in range(coloumn_length):
			num = data[i][j]
			if num != 2 and num % 2 == 0 or num == 1:
				data[i][j] = 0
			else:
				for k in range(3,int(num**0.5)+1,2):
					if num % k == 0:
						data[i][j] = 0
						break
				if data[i][j] != 0:
					data[i][j] = 1 
					result += 1
	if result < 4:
		return result

	for i in range(row_length-1):
		for j in range(coloumn_length-1):
			if data[i][j] == 1:
				for k in range(2,min(row_length,coloumn_length) + 1):
					flag = 1
					if i + k > row_length or j + k > coloumn_length:
						break
					for l in range(k):
						if data[i+l][j+k-1] != 1 or data[i+k-1][j+l] != 1:
							flag = 0
							break
					if flag==1:
						result += 1
					else:
						break
	return result