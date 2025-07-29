import React, { useState } from 'react'
import { Trophy, Medal, Award, ChevronDown, ChevronUp, X } from 'lucide-react'

const Leader = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'score', direction: 'desc' })
  const [showCriteria, setShowCriteria] = useState(false)

  // Sample leaderboard data
  const leaderboardData = [
    { year: 'Second', name: 'Madhusudan Tiwari', score: 950 },
    { year: 'Second', name: 'Shivam', score: 920 },
    { year: 'Third', name: 'Prateek Gaur', score: 885 },
    { year: 'Third', name: 'Himanshi Sharma', score: 860 },
    { year: 'Third', name: 'Hemant Choudhary', score: 840 },
    { year: 'Second', name: 'Singh Ayushraj', score: 925 },
    { year: 'Second', name: 'Sumit Sharma', score: 895 },
    { year: 'Second', name: 'Hardik Vijay', score: 870 },
    { year: 'Second', name: 'Siya Jhanwar', score: 830 },
    { year: 'Second', name: 'Mahima Jain', score: 910 },
    { year: 'Second', name: 'Vedansh ', score: 890 },
    { year: 'Second', name: 'Vikas Sharma', score: 875 },
    { year: 'Third', name: 'Priyanka Yadav', score: 845 },
    { year: 'Second', name: 'Mohit Choudhary', score: 820 },
    { year: 'Second', name: 'Priyanshu Yadav', score: 820 },
    { year: 'Second', name: 'Krishan Yadav', score: 820 },
    { year: 'Second', name: 'Nitin Nareda', score: 820 },
    { year: 'Third', name: 'Mahesh Gurjar', score: 820 },
    { year: 'Third', name: 'Suresh Soni', score: 820 },
    { year: 'Second', name: 'Sachin', score: 820 },
    { year: 'Second', name: 'Chetanya Sharma', score: 820 },
    { year: 'Second', name: 'Manvendra Singh', score: 820 },
    { year: 'Second', name: 'Hemant Sharma', score: 820 },
    { year: 'Second', name: 'Sonu', score: 820 },
    { year: 'Second', name: 'Devid Joshi', score: 820 },
    { year: 'Second', name: 'Harmeet singh', score: 820 },
    { year: 'Second', name: 'Satyendra Saini', score: 820 },
    { year: 'Second', name: 'Danish Khan', score: 820 },
    { year: 'Second', name: 'Aditya Singh', score: 820 },
    { year: 'Second', name: 'Hrishabh', score: 820 },
    { year: 'Second', name: 'Dhruv Sharma', score: 820 },
    { year: 'Second', name: 'Lakshay Beria', score: 820 },
    { year: 'Second', name: 'Rajveer Singh', score: 820 },
    { year: 'Second', name: 'Tarun Sharma', score: 820 },
    { year: 'Second', name: 'Vijay', score: 820 },
    { year: 'Second', name: 'Mahendra', score: 820 },
  ]

  // Sorting function
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  // Sort data based on current config
  const sortedData = [...leaderboardData].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1
  })

  // Get rank icon based on position
  const getRankIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 2:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">{index + 1}</span>
    }
  }

  // Get score color based on range
  const getScoreColor = (score) => {
    if (score >= 900) return 'text-green-500 font-bold'
    if (score >= 850) return 'text-blue-500 font-semibold'
    if (score >= 800) return 'text-yellow-500 font-medium'
    return 'text-gray-500'
  }

  return (
    <div className="relative top-20 min-h-screen bg-stone-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
             Leaderboard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the top-performing members across different years. Rankings based on contributions,
            event participation, leadership, and overall impact to the club.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl text-center">
            <Trophy className="w-12 h-12 mx-auto mb-2 text-white" />
            <h3 className="text-2xl font-bold text-white">40+</h3>
            <p className="text-yellow-100">Active Members</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-center">
            <Award className="w-12 h-12 mx-auto mb-2 text-white" />
            <h3 className="text-2xl font-bold text-white">950</h3>
            <p className="text-blue-100">Highest Score</p>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-zinc-600 transition-colors"
                    onClick={() => handleSort('year')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Year</span>
                      {sortConfig.key === 'year' && (
                        sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-zinc-600 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Member Name</span>
                      {sortConfig.key === 'name' && (
                        sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-zinc-600 transition-colors"
                    onClick={() => handleSort('score')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Score</span>
                      {sortConfig.key === 'score' && (
                        sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {sortedData.map((entry, index) => (
                  <tr 
                    key={`${entry.year}-${entry.name}`}
                    className="hover:bg-zinc-700 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRankIcon(index)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full inline-block">
                        {entry.year}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-semibold text-white">{entry.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-xl font-bold ${getScoreColor(entry.score)}`}>
                        {entry.score}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="relative"> 
        {/* Footer Note */}
        <div className="text-center flex flex-col items-center mt-8 text-gray-400">
          <p className="text-sm">
            Scores are calculated based on event participation, leadership contributions  and overall club impact.
          </p>
          <button 
            onClick={() => setShowCriteria(true)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            view score criteria
          </button>
        </div>

        {/* Score Criteria Modal */}
        {showCriteria && (
          <div className="     flex items-center justify-center  p-4 absolute top-[-250px]"  >
            <div className="bg-white rounded-xl  shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Score Criteria</h3>
                  <button 
                    onClick={() => setShowCriteria(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-2">Event marking scheme for all activities</p>
              </div>

              {/* Content */}
              <div className="p-6 text-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                      <span className="font-semibold text-gray-800">1st Position</span>
                    </div>
                    <span className="text-2xl font-bold text-yellow-600">200</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                    <div className="flex items-center space-x-3">
                      <Medal className="w-6 h-6 text-gray-500" />
                      <span className="font-semibold text-gray-800">2nd Position</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-500">180</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-amber-600" />
                      <span className="font-semibold text-gray-800">3rd Position</span>
                    </div>
                    <span className="text-2xl font-bold text-amber-600">150</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                      <span className="font-semibold text-gray-800">Event Managment</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-500">200/150</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span className="font-semibold text-gray-800">Participants</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-500">100</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Note:</strong> Total scores are cumulative across all events and activities throughout the year.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 rounded-b-xl">
                <button 
                  onClick={() => setShowCriteria(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Leader