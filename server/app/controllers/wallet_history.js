// let utils = require('./utils');
// let Wallet_history = require('mongoose').model('Wallet_history');
// let User = require('mongoose').model('User');
// let Provider = require('mongoose').model('Provider');
// let Partner = require('mongoose').model('Partner')
// let Corporate = require('mongoose').model('Corporate');

// let console = require('./console');
// // get_wallet_history
// exports.get_wallet_history = function (req, res) {
//     utils.check_request_params(req.body, [{name: 'user_id', type: 'string'}], function (response) {
//         if (response.success) {
//             let type = Number(req.body.type);
//             let Table;
//             switch (type) {
//                 case Number(constant_json.PROVIDER_UNIQUE_NUMBER):
//                     type = Number(constant_json.PROVIDER_UNIQUE_NUMBER);
//                     Table = Provider;
//                     break;
//                 case Number(constant_json.PARTNER_UNIQUE_NUMBER):
//                     type = Number(constant_json.PARTNER_UNIQUE_NUMBER);
//                     Table = Partner;
//                     break;
//                 default:
//                     type = Number(constant_json.USER_UNIQUE_NUMBER);
//                     Table = User;
//                     break;
//             }

//             Table.findOne({_id: req.body.user_id}).then((detail) => {
//                 if (detail) {
//                     if (req.body.token !== null && detail.token !== req.body.token) {
//                         res.json({success: false, error_code: error_message.ERROR_CODE_INVALID_TOKEN});
//                     } else {
//                         Wallet_history.find({
//                             user_id: req.body.user_id,
//                             user_type: type
//                         }, null, {sort: {'unique_id': -1}}).then((wallet_history) => {
//                             if (wallet_history.length == 0) {
//                                 res.json({success: false, error_code: error_message.ERROR_CODE_WALLET_HISTORY_NOT_FOUND});
//                             } else {
//                                 res.json({
//                                     success: true,
//                                     message: success_messages.MESSAGE_CODE_WALLET_HISTORY_GET_SUCCESSFULLY,
//                                     wallet_history: wallet_history
//                                 });
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             res.json({
//                 success: false,
//                 error_code: response.error_code,
//                 error_description: response.error_description
//             });
//         }
//     });
// };
