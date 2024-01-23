document.getElementById('submitBtn').addEventListener('click', () => {
    console.log("button clicked!")

    const onPeak = parseFloat(document.getElementById('onPeak').value);
    const offPeak = parseFloat(document.getElementById('offPeak').value);
    const province = document.getElementById('province').value;

    if (isNaN(onPeak) || isNaN(offPeak) || !province) {
        alert('Please enter valid values for all fields.');
        return;
    }

    // Constants
    const onPeakRate = 0.132; // On-peak rate per kWh
    const offPeakRate = 0.065; // Off-peak rate
    const hstRate = 0.13; // HST rate
    const bcRebateRate = 0.08;

    // Calculations
    const onPeakCharge = onPeak * onPeakRate;
    const offPeakCharge = offPeak * offPeakRate;
    const grossConsumptionCharges = onPeakCharge + offPeakCharge;
    const hstAmount = grossConsumptionCharges * hstRate;
    const provincialRebate = province === 'BC' ? grossConsumptionCharges * bcRebateRate : 0;
    const netConsumptionCharges = grossConsumptionCharges + hstAmount - provincialRebate;

    // Display the receipt
    document.getElementById('receiptOnPeak').innerText = onPeak.toFixed(2);
    document.getElementById('receiptOffPeak').innerText = offPeak.toFixed(2);
    document.getElementById('receiptProvince').innerText = province;
    document.getElementById('onPeakCharge').innerText = onPeakCharge.toFixed(2);
    document.getElementById('offPeakCharge').innerText = offPeakCharge.toFixed(2);
    document.getElementById('grossConsumptionCharges').innerText = grossConsumptionCharges.toFixed(2);
    document.getElementById('hstAmount').innerText = hstAmount.toFixed(2);
    document.getElementById('provincialRebate').innerText = provincialRebate.toFixed(2);
    document.getElementById('netConsumptionCharges').innerText = netConsumptionCharges.toFixed(2);

    // Show the receipt
    document.getElementById('receipt').style.display = 'block';
});