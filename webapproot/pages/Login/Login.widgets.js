Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%","width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"50%","width":"96%"}, {}],
		loginMainPanel: ["wm.Panel", {"height":"318px","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_BackgroundColor_White"]},"height":"350px","width":"400px","border":"1","padding":"5,30,10,30","borderColor":"#bbb"}, {}, {
				panel_image: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"90px","width":"450px","horizontalAlign":"center","verticalAlign":"middle","padding":"0","margin":"0"}, {}, {
					picture1: ["wm.Picture", {"height":"85px","border":"0","width":"330px","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","aspect":"v"}, {}]
				}],
				label2: ["wm.Label", {"height":"37px","width":"96px","border":"0","align":"center","caption":"Aprendoz Docentes"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"35px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"35px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
					passObject1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"32px","width":"100%","border":"0","align":"center","caption":"¿No puedes acceder a tu cuenta?","link":"http://aprendoz.rochester.edu.co/forgot-password"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"100%","width":"110px","caption":"Acceder","borderColor":"#aaa","margin":"0","border":"0","iconUrl":"resources/images/buttons/login.png","iconHeight":"20px","iconMargin":"0 -20px 0 0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"11px"}, {}],
				loginErrorMsg: ["wm.Label", {"height":"46px","border":"0","align":"center","caption":" "}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"513px","border":"0","align":"center","caption":"Colegio Rochester - Aprendoz © 2013 - 2014"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}