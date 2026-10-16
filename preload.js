const {
  contextBridge,
  ipcRenderer
} = require('electron');


contextBridge.exposeInMainWorld(

  'tallyBridge',

  {

    // Activation
    activate: (
      activationCode
    ) =>

      ipcRenderer.invoke(
        'activate-bridge',
        activationCode
      ),


    // Save Tally Setup
    saveSetup: (
      setupData
    ) =>

      ipcRenderer.invoke(
        'save-tally-setup',
        setupData
      )

  }

);