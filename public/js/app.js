// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize managers
    window.calendar = new Calendar();
    window.clientManager = new ClientManager();
    window.notificationManager = new NotificationManager();
    
    // Load initial data
    await window.calendar.loadLessons();
    await window.calendar.render();
    
    // Notification settings button
    document.getElementById('notification-settings-btn').addEventListener('click', () => {
        window.notificationManager.showNotificationSettings();
    });
    
    // Close notification settings modal
    document.getElementById('close-notification-modal').addEventListener('click', () => {
        window.notificationManager.hideNotificationSettings();
    });
    
    // Save notification settings
    document.getElementById('save-notification-settings').addEventListener('click', () => {
        window.notificationManager.saveSettings();
    });
    
    // Toggle 8am time picker
    document.getElementById('enable-8am').addEventListener('change', () => {
        window.notificationManager.toggle8amTimePicker();
    });
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    console.log('App initialized');
});



