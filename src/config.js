
export const LAND_RECORD_ADDRESS = '0x6B48459aeA628535c60302A6177e3a62D9edec64'

export const LAND_RECORD_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "addr",
				"type": "string"
			}
		],
		"name": "adddisputeLand",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_addr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Oname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Id",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "OwnAddr",
				"type": "address"
			}
		],
		"name": "addLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "addr",
				"type": "string"
			}
		],
		"name": "handleDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "toName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "addr",
				"type": "string"
			}
		],
		"name": "transferOwnerShip",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "ViewMyLands",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ownerAddr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "streetAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ownerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ownerID",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "bytes1",
						"name": "statusForPurchase",
						"type": "bytes1"
					}
				],
				"internalType": "struct LandRecord.Land[]",
				"name": "rec",
				"type": "tuple[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lands",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "streetAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ownerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ownerID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "bytes1",
				"name": "statusForPurchase",
				"type": "bytes1"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "personalProperties",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "streetAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ownerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ownerID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "bytes1",
				"name": "statusForPurchase",
				"type": "bytes1"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ViewAllLands",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ownerAddr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "streetAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ownerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ownerID",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "bytes1",
						"name": "statusForPurchase",
						"type": "bytes1"
					}
				],
				"internalType": "struct LandRecord.Land[]",
				"name": "rec",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]