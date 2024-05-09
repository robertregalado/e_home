import React from 'react';
import './SmartHomeAnalytics.css'; // Import CSS file for styling
import DeviceUsageChart from './DeviceUsageChart';
import EnergyConsumptionChart from './EnergyConsumptionChart';
import TemperatureControlChart from './TemperatureControlChart';
import SecurityEventsChart from './SecurityEventsChart';
import AutomationRulesStats from './AutomationRulesStats';
import UserInteractionMetrics from './UserInteractionMetrics';
import ErrorLogs from './ErrorLogs';
import CustomizableDashboard from './CustomizableDashboard';

function SmartHomeAnalytics() {
    return (
        <div className="smart-home-analytics">
            <h1>Smart Home Analytics</h1>
            <div className="analytics-section">
                <div className="grid-container">
                    <div className="card">
                        <DeviceUsageChart />
                    </div>
                    <div className="card">
                        <EnergyConsumptionChart />
                    </div>
                    <div className="card">
                        <TemperatureControlChart />
                    </div>
                    <div className="card">
                        <SecurityEventsChart />
                    </div>
                    <div className="card">
                        <AutomationRulesStats />
                    </div>
                    <div className="card">
                        <UserInteractionMetrics />
                    </div>
                    <div className="card">
                        <ErrorLogs />
                    </div>
                    {/* Add more card components here if needed */}
                </div>
            </div>
        </div>
    );
}

export default SmartHomeAnalytics;


