package com.notifyapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class BootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        if (intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)) {
            Log.d("BOOT_TEST", "Phone restarted 🔥");

            // Yahan direct service start nahi hoti
            // Notification listener auto bind hota hai agar permission ON hai
        }
    }
}