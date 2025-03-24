import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';
import { FaWallet, FaPlane, FaBed, FaUtensils, FaTicketAlt } from 'react-icons/fa';

const Expenses = () => {
  const [expenses] = useState([
    { id: 1, category: 'Accommodation', amount: 1200, date: '2024-02-15', icon: FaBed },
    { id: 2, category: 'Transportation', amount: 500, date: '2024-02-15', icon: FaPlane },
    { id: 3, category: 'Food', amount: 300, date: '2024-02-15', icon: FaUtensils },
    { id: 4, category: 'Activities', amount: 400, date: '2024-02-15', icon: FaTicketAlt },
  ]);

  const chartOption = {
    title: {
      text: 'Expense Distribution',
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: ${c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle'
    },
    series: [
      {
        name: 'Expenses',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: expenses.map(expense => ({
          value: expense.amount,
          name: expense.category
        }))
      }
    ]
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Travel Expenses
        </h1>
        <div className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl">
          <FaWallet className="mr-2 text-xl" />
          <span className="text-2xl font-bold">Total: ${totalExpenses}</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 text-left">Category</th>
                  <th className="py-4 px-4 text-left">Amount</th>
                  <th className="py-4 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(expense => (
                  <tr key={expense.id} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <expense.icon className="mr-2 text-primary-500" />
                        {expense.category}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold">${expense.amount}</td>
                    <td className="py-4 px-4 text-gray-600">
                      {format(new Date(expense.date), 'MMM dd, yyyy')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <ReactECharts option={chartOption} style={{ height: '400px' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Expenses;