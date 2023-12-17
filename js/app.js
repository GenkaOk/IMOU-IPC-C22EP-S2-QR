const jQuery = $ = require('jquery');

$(document).ready(function () {
  $('#serial').keyup(function () {
    $('#generate-button').prop('disabled', $(this).val().trim().length !== 15);
  }).keyup();
  $('#generate-button').click(function () {
    const serial = $('#serial').val().toUpperCase().trim();
    const sc = serial.substring(serial.length - 8);
    const qrPayload = `{SN:${serial},DT:IPC-C22EP-S2,SC:${sc},NC:008}`;
    $('#result').html(
      $('<img/>').
        prop('src',
          'https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=' +
          encodeURIComponent(qrPayload)),
    );
  });
});
