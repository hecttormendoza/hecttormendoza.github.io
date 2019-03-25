const EmailPrescription = {
  baseEmail: 'recetas@benandfrank.com',
  companyName: 'Ben & Frank',
  mandrillappKey: 'ZHDm1jmfZHr4O8nAnJf36w',
  mandrillappUrl: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
  prescriptionInfo: function () {
    return getData();
  },
  sendToPatient: function () {
    const info = this.prescriptionInfo(); 
    axios({
      method: 'post',
      url: this.mandrillappUrl,
      data: {
        "key": this.mandrillappKey,
        "template_name": "Recetas Ben & Frank Paciente Templo",
        "template_content": [
          {
            "name": "Recetas Ben & Frank Paciente Templo",
            "content": "Receta",
          }
        ],
        "message": {
          "subject": "Gracias por visitarnos",
          "from_email": this.baseEmail,
          "from_name": this.companyName,
          "to": [
            {
              "email": info.customerEmail,
              "type": "to",
            }
          ],
          "track_opens": true,
          "track_clicks": true,
          "auto_text": true,
          "auto_html": true,
          "inline_css": true,
          "merge": true,
          "merge_language": "handlebars",
          "global_merge_vars": [
            {
              "name": "pacient_name",
              "content": info.customerName,
            },
            {
              "name": "pacient_email",
              "content": info.customerEmail,
            },
            {
              "name": "clinic_name",
              "content": info.store,
            }
          ],
          "merge_vars": [
            {
              "rcpt": info.customerEmail,
              "vars": [
                {
                  "name": "pacient_name",
                  "content": info.customerName,
                },
                {
                  "name": "pacient_email",
                  "content": info.customerEmail,
                },
                {
                  "name": "clinic_name",
                  "content": info.store,
                }
              ]
            }
          ],
        },
        "async": false
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  },
  sendToUs: function () {
    const info = this.prescriptionInfo();
    axios({
      method: 'post',
      url: this.mandrillappUrl,
      data: {
        "key": this.mandrillappKey,
        "template_name": "Recetas Ben & Frank Templos V2",
        "template_content": [
          {
            "name": "Recetas Ben & Frank Templos V2",
            "content": "Receta"
          }
        ],
        "message": {
          "subject": "Receta de "+info.customerName+"",
          "from_email": this.baseEmail,
          "from_name": this.companyName,
          "to": [
            {
              "email": this.baseEmail,
              "type": "to"
            }
          ],
          "track_opens": true,
          "track_clicks": true,
          "auto_text": true,
          "auto_html": true,
          "inline_css": true,
          "merge": true,
          "merge_language": "handlebars",
          "global_merge_vars": [
            {
              "name": "patient_name",
              "content": info.customerName
            },
            {
              "name": "patient_email",
              "content": info.customerEmail
            },
            {
              "name": "store",
              "content": info.store
            },
            {
              "name": "optometrist",
              "content": info.optometrist
            },
            {
              "name": "is_guarantee",
              "content": info.isGuarantee
            },
            {
              "name": "frame",
              "content": info.frames
            },
            {
              "name": "prescription_type",
              "content": info.prescriptionType
            },
            {
              "name": "rx_right_sphere",
              "content": info.rxRightSphere
            },
            {
              "name": "rx_right_cylinder",
              "content": info.rxRightCylinder
            },
            {
              "name": "rx_right_axe",
              "content": info.rxRightAxe
            },
            {
              "name": "rx_right_add",
              "content": info.rxRightAdd
            },
            {
              "name": "rx_right_av_cc_far",
              "content": info.rxRightAvCcFar
            },
            {
              "name": "rx_av_cc_close",
              "content": info.rxAvCcClose
            },
            {
              "name": "rx_right_dnp",
              "content": info.rxRightDnp
            },
            {
              "name": "rx_left_sphere",
              "content": info.rxLeftSphere
            },
            {
              "name": "rx_left_cylinder",
              "content": info.rxLeftCylinder
            },
            {
              "name": "rx_left_axe",
              "content": info.rxLeftAxe
            },
            {
              "name": "rx_left_add",
              "content": info.rxLeftAdd
            },
            {
              "name": "rx_left_av_cc_far",
              "content": info.rxLeftAvCcFar
            },
            {
              "name": "rx_left_dnp",
              "content": info.rxLeftDnp
            },
            {
              "name": "height",
              "content": info.height
            },
            {
              "name": "additional_notes",
              "content": info.additionalNotes
            }
          ],
          "merge_vars": [
            {
              "rcpt": this.baseEmail,
              "vars": [
                {
                  "name": "patient_name",
                  "content": info.customerName
                },
                {
                  "name": "patient_email",
                  "content": info.customerEmail
                },
                {
                  "name": "store",
                  "content": info.store
                },
                {
                  "name": "optometrist",
                  "content": info.optometrist
                },
                {
                  "name": "is_guarantee",
                  "content": info.isGuarantee
                },
                {
                  "name": "frame",
                  "content": info.frames
                },
                {
                  "name": "prescription_type",
                  "content": info.prescriptionType
                },
                {
                  "name": "rx_right_sphere",
                  "content": info.rxRightSphere
                },
                {
                  "name": "rx_right_cylinder",
                  "content": info.rxRightCylinder
                },
                {
                  "name": "rx_right_axe",
                  "content": info.rxRightAxe
                },
                {
                  "name": "rx_right_add",
                  "content": info.rxRightAdd
                },
                {
                  "name": "rx_right_av_cc_far",
                  "content": info.rxRightAvCcFar
                },
                {
                  "name": "rx_av_cc_close",
                  "content": info.rxAvCcClose
                },
                {
                  "name": "rx_right_dnp",
                  "content": info.rxRightDnp
                },
                {
                  "name": "rx_left_sphere",
                  "content": info.rxLeftSphere
                },
                {
                  "name": "rx_left_cylinder",
                  "content": info.rxLeftCylinder
                },
                {
                  "name": "rx_left_axe",
                  "content": info.rxLeftAxe
                },
                {
                  "name": "rx_left_add",
                  "content": info.rxLeftAdd
                },
                {
                  "name": "rx_left_av_cc_far",
                  "content": info.rxLeftAvCcFar
                },
                {
                  "name": "rx_left_dnp",
                  "content": info.rxLeftDnp
                },
                {
                  "name": "height",
                  "content": info.height
                },
                {
                  "name": "additional_notes",
                  "content": info.additionalNotes
                }
              ]
            }
          ]
        },
        "async": false
      }
    })
    .then((response) => {
      console.log(response);
      $('button[name="send-prescription"]').prop('disabled', false);
      $('#prescriptionModal.modal').modal('close');
      M.toast({html: 'Receta enviada', classes: 'rounded'});
      $('#form_add').trigger("reset");
      $('#form_mirror').trigger("reset");
      $('#form-receta').trigger("reset");
      setTimeout(function() {
        changeView('patientwaiting');
      }, 5000);
    })
    .catch(error => {
      console.log(error);
    });
  },
  init: function () {
    const info = this.prescriptionInfo();
    console.log(info);
  }
}

$(document).ready(function () {
  EmailPrescription.init();
});