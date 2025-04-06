// lib/assistantData.js
export const assistantTopics = [
    {
      id: 'status-check', // Unique identifier
      question: 'How do I check my farm status?',
      answer: 'You can view the current status of your monitored fields on the main dashboard.',
      recommendation: {
        text: 'Would you like to go to the dashboard now?',
        actionType: 'route', // 'route' or 'scroll'
        target: '/' // Target Route path (for 'route') or element ID (for 'scroll')
      }
    },
    {
      id: 'alert-config',
      question: 'Where can I configure sensor alerts?',
      answer: 'Alert configurations are available in the Settings section under "Sensor Alerts". Go to Settings > Alerts.',
      recommendation: {
        text: 'Go to the Alert Settings page?',
        actionType: 'route',
        target: '/settings#alerts' // Example route with hash
      }
    },
    {
      id: 'soil-info',
      question: 'What does the "Soil Moisture" graph show?',
      answer: 'This graph displays the recorded soil moisture levels over the selected time period, helping you understand irrigation needs.',
      // No recommendation for this one, so the 'recommendation' key is omitted or null
    },
    {
      id: 'yield-forecast-scroll', // Give scroll targets unique IDs if needed
      question: 'Where can I see the yield forecast details?',
      answer: 'The detailed yield forecast breakdown is usually shown below the main summary graph on the dashboard.',
      recommendation: {
        text: 'Scroll to the forecast details section?',
        actionType: 'scroll',
        target: 'yield-details-section' // The ID of the element to scroll to on the page
      }
    },
    // --- Add more topics specific to your Farm AI Chi app ---
  ];