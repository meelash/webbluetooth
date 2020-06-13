!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@abandonware/noble")):"function"==typeof define&&define.amd?define(["exports","@abandonware/noble"],t):t((e=e||self).webbluetooth={},e.noble)}(this,(function(e,t){"use strict";var i,r,n;function s(){}function a(){a.init.call(this)}function c(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function o(e,t,i){if(t)e.call(i);else for(var r=e.length,n=f(e,r),s=0;s<r;++s)n[s].call(i)}function d(e,t,i,r){if(t)e.call(i,r);else for(var n=e.length,s=f(e,n),a=0;a<n;++a)s[a].call(i,r)}function h(e,t,i,r,n){if(t)e.call(i,r,n);else for(var s=e.length,a=f(e,s),c=0;c<s;++c)a[c].call(i,r,n)}function _(e,t,i,r,n,s){if(t)e.call(i,r,n,s);else for(var a=e.length,c=f(e,a),o=0;o<a;++o)c[o].call(i,r,n,s)}function l(e,t,i,r){if(t)e.apply(i,r);else for(var n=e.length,s=f(e,n),a=0;a<n;++a)s[a].apply(i,r)}function u(e,t,i,r){var n,a,o,d;if("function"!=typeof i)throw new TypeError('"listener" argument must be a function');if((a=e._events)?(a.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),a=e._events),o=a[t]):(a=e._events=new s,e._eventsCount=0),o){if("function"==typeof o?o=a[t]=r?[i,o]:[o,i]:r?o.unshift(i):o.push(i),!o.warned&&(n=c(e))&&n>0&&o.length>n){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,d=h,"function"==typeof console.warn?console.warn(d):console.log(d)}}else o=a[t]=i,++e._eventsCount;return e}function v(e,t,i){var r=!1;function n(){e.removeListener(t,n),r||(r=!0,i.apply(e,arguments))}return n.listener=i,n}function m(e){var t=this._events;if(t){var i=t[e];if("function"==typeof i)return 1;if(i)return i.length}return 0}function f(e,t){for(var i=new Array(t);t--;)i[t]=e[t];return i}s.prototype=Object.create(null),a.EventEmitter=a,a.usingDomains=!1,a.prototype.domain=void 0,a.prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.init=function(){this.domain=null,a.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new s,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(e){var t,i,r,n,s,a,c,u="error"===e;if(a=this._events)u=u&&null==a.error;else if(!u)return!1;if(c=this.domain,u){if(t=arguments[1],!c){if(t instanceof Error)throw t;var v=new Error('Uncaught, unspecified "error" event. ('+t+")");throw v.context=t,v}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=c,t.domainThrown=!1,c.emit("error",t),!1}if(!(i=a[e]))return!1;var m="function"==typeof i;switch(r=arguments.length){case 1:o(i,m,this);break;case 2:d(i,m,this,arguments[1]);break;case 3:h(i,m,this,arguments[1],arguments[2]);break;case 4:_(i,m,this,arguments[1],arguments[2],arguments[3]);break;default:for(n=new Array(r-1),s=1;s<r;s++)n[s-1]=arguments[s];l(i,m,this,n)}return!0},a.prototype.addListener=function(e,t){return u(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return u(this,e,t,!0)},a.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,v(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,v(this,e,t)),this},a.prototype.removeListener=function(e,t){var i,r,n,a,c;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(i=r[e]))return this;if(i===t||i.listener&&i.listener===t)0==--this._eventsCount?this._events=new s:(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(n=-1,a=i.length;a-- >0;)if(i[a]===t||i[a].listener&&i[a].listener===t){c=i[a].listener,n=a;break}if(n<0)return this;if(1===i.length){if(i[0]=void 0,0==--this._eventsCount)return this._events=new s,this;delete r[e]}else!function(e,t){for(var i=t,r=i+1,n=e.length;r<n;i+=1,r+=1)e[i]=e[r];e.pop()}(i,n);r.removeListener&&this.emit("removeListener",e,c||t)}return this},a.prototype.removeAllListeners=function(e){var t,i;if(!(i=this._events))return this;if(!i.removeListener)return 0===arguments.length?(this._events=new s,this._eventsCount=0):i[e]&&(0==--this._eventsCount?this._events=new s:delete i[e]),this;if(0===arguments.length){for(var r,n=Object.keys(i),a=0;a<n.length;++a)"removeListener"!==(r=n[a])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new s,this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},a.prototype.listeners=function(e){var t,i=this._events;return i&&(t=i[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(t):[]},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class p extends a{constructor(){super(...arguments),this.isEventListenerObject=e=>void 0!==e.handleEvent}addEventListener(e,t){if(t){const i=this.isEventListenerObject(t)?t.handleEvent:t;super.addListener(e,i)}}removeEventListener(e,t){if(t){const i=this.isEventListenerObject(t)?t.handleEvent:t;super.removeListener(e,i)}}dispatchEvent(e){return super.emit(e.type,e)}}function g(e){return"number"==typeof e&&(e=e.toString(16)),(e=e.toLowerCase()).length<=8&&(e=("00000000"+e).slice(-8)+"-0000-1000-8000-00805f9b34fb"),32===e.length&&(e=e.match(/^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/).splice(1).join("-")),e}function w(t){return"string"==typeof t&&e.bluetoothServices[t]&&(t=e.bluetoothServices[t]),g(t)}function b(t){return"string"==typeof t&&e.bluetoothCharacteristics[t]&&(t=e.bluetoothCharacteristics[t]),g(t)}function y(t){return"string"==typeof t&&e.bluetoothDescriptors[t]&&(t=e.bluetoothDescriptors[t]),g(t)}(i=e.bluetoothServices||(e.bluetoothServices={}))[i.alert_notification=6161]="alert_notification",i[i.automation_io=6165]="automation_io",i[i.battery_service=6159]="battery_service",i[i.blood_pressure=6160]="blood_pressure",i[i.body_composition=6171]="body_composition",i[i.bond_management=6174]="bond_management",i[i.continuous_glucose_monitoring=6175]="continuous_glucose_monitoring",i[i.current_time=6149]="current_time",i[i.cycling_power=6168]="cycling_power",i[i.cycling_speed_and_cadence=6166]="cycling_speed_and_cadence",i[i.device_information=6154]="device_information",i[i.environmental_sensing=6170]="environmental_sensing",i[i.generic_access=6144]="generic_access",i[i.generic_attribute=6145]="generic_attribute",i[i.glucose=6152]="glucose",i[i.health_thermometer=6153]="health_thermometer",i[i.heart_rate=6157]="heart_rate",i[i.human_interface_device=6162]="human_interface_device",i[i.immediate_alert=6146]="immediate_alert",i[i.indoor_positioning=6177]="indoor_positioning",i[i.internet_protocol_support=6176]="internet_protocol_support",i[i.link_loss=6147]="link_loss",i[i.location_and_navigation=6169]="location_and_navigation",i[i.next_dst_change=6151]="next_dst_change",i[i.phone_alert_status=6158]="phone_alert_status",i[i.pulse_oximeter=6178]="pulse_oximeter",i[i.reference_time_update=6150]="reference_time_update",i[i.running_speed_and_cadence=6164]="running_speed_and_cadence",i[i.scan_parameters=6163]="scan_parameters",i[i.tx_power=6148]="tx_power",i[i.user_data=6172]="user_data",i[i.weight_scale=6173]="weight_scale",(r=e.bluetoothCharacteristics||(e.bluetoothCharacteristics={}))[r.aerobic_heart_rate_lower_limit=10878]="aerobic_heart_rate_lower_limit",r[r.aerobic_heart_rate_upper_limit=10884]="aerobic_heart_rate_upper_limit",r[r.aerobic_threshold=10879]="aerobic_threshold",r[r.age=10880]="age",r[r.aggregate=10842]="aggregate",r[r.alert_category_id=10819]="alert_category_id",r[r.alert_category_id_bit_mask=10818]="alert_category_id_bit_mask",r[r.alert_level=10758]="alert_level",r[r.alert_notification_control_point=10820]="alert_notification_control_point",r[r.alert_status=10815]="alert_status",r[r.altitude=10931]="altitude",r[r.anaerobic_heart_rate_lower_limit=10881]="anaerobic_heart_rate_lower_limit",r[r.anaerobic_heart_rate_upper_limit=10882]="anaerobic_heart_rate_upper_limit",r[r.anaerobic_threshold=10883]="anaerobic_threshold",r[r.analog=10840]="analog",r[r.apparent_wind_direction=10867]="apparent_wind_direction",r[r.apparent_wind_speed=10866]="apparent_wind_speed",r[r["gap.appearance"]=10753]="gap.appearance",r[r.barometric_pressure_trend=10915]="barometric_pressure_trend",r[r.battery_level=10777]="battery_level",r[r.blood_pressure_feature=10825]="blood_pressure_feature",r[r.blood_pressure_measurement=10805]="blood_pressure_measurement",r[r.body_composition_feature=10907]="body_composition_feature",r[r.body_composition_measurement=10908]="body_composition_measurement",r[r.body_sensor_location=10808]="body_sensor_location",r[r.bond_management_control_point=10916]="bond_management_control_point",r[r.bond_management_feature=10917]="bond_management_feature",r[r.boot_keyboard_input_report=10786]="boot_keyboard_input_report",r[r.boot_keyboard_output_report=10802]="boot_keyboard_output_report",r[r.boot_mouse_input_report=10803]="boot_mouse_input_report",r[r["gap.central_address_resolution_support"]=10918]="gap.central_address_resolution_support",r[r.cgm_feature=10920]="cgm_feature",r[r.cgm_measurement=10919]="cgm_measurement",r[r.cgm_session_run_time=10923]="cgm_session_run_time",r[r.cgm_session_start_time=10922]="cgm_session_start_time",r[r.cgm_specific_ops_control_point=10924]="cgm_specific_ops_control_point",r[r.cgm_status=10921]="cgm_status",r[r.csc_feature=10844]="csc_feature",r[r.csc_measurement=10843]="csc_measurement",r[r.current_time=10795]="current_time",r[r.cycling_power_control_point=10854]="cycling_power_control_point",r[r.cycling_power_feature=10853]="cycling_power_feature",r[r.cycling_power_measurement=10851]="cycling_power_measurement",r[r.cycling_power_vector=10852]="cycling_power_vector",r[r.database_change_increment=10905]="database_change_increment",r[r.date_of_birth=10885]="date_of_birth",r[r.date_of_threshold_assessment=10886]="date_of_threshold_assessment",r[r.date_time=10760]="date_time",r[r.day_date_time=10762]="day_date_time",r[r.day_of_week=10761]="day_of_week",r[r.descriptor_value_changed=10877]="descriptor_value_changed",r[r["gap.device_name"]=10752]="gap.device_name",r[r.dew_point=10875]="dew_point",r[r.digital=10838]="digital",r[r.dst_offset=10765]="dst_offset",r[r.elevation=10860]="elevation",r[r.email_address=10887]="email_address",r[r.exact_time_256=10764]="exact_time_256",r[r.fat_burn_heart_rate_lower_limit=10888]="fat_burn_heart_rate_lower_limit",r[r.fat_burn_heart_rate_upper_limit=10889]="fat_burn_heart_rate_upper_limit",r[r.firmware_revision_string=10790]="firmware_revision_string",r[r.first_name=10890]="first_name",r[r.five_zone_heart_rate_limits=10891]="five_zone_heart_rate_limits",r[r.floor_number=10930]="floor_number",r[r.gender=10892]="gender",r[r.glucose_feature=10833]="glucose_feature",r[r.glucose_measurement=10776]="glucose_measurement",r[r.glucose_measurement_context=10804]="glucose_measurement_context",r[r.gust_factor=10868]="gust_factor",r[r.hardware_revision_string=10791]="hardware_revision_string",r[r.heart_rate_control_point=10809]="heart_rate_control_point",r[r.heart_rate_max=10893]="heart_rate_max",r[r.heart_rate_measurement=10807]="heart_rate_measurement",r[r.heat_index=10874]="heat_index",r[r.height=10894]="height",r[r.hid_control_point=10828]="hid_control_point",r[r.hid_information=10826]="hid_information",r[r.hip_circumference=10895]="hip_circumference",r[r.humidity=10863]="humidity",r[r["ieee_11073-20601_regulatory_certification_data_list"]=10794]="ieee_11073-20601_regulatory_certification_data_list",r[r.indoor_positioning_configuration=10925]="indoor_positioning_configuration",r[r.intermediate_blood_pressure=10806]="intermediate_blood_pressure",r[r.intermediate_temperature=10782]="intermediate_temperature",r[r.irradiance=10871]="irradiance",r[r.language=10914]="language",r[r.last_name=10896]="last_name",r[r.latitude=10926]="latitude",r[r.ln_control_point=10859]="ln_control_point",r[r.ln_feature=10858]="ln_feature",r[r["local_east_coordinate.xml"]=10929]="local_east_coordinate.xml",r[r.local_north_coordinate=10928]="local_north_coordinate",r[r.local_time_information=10767]="local_time_information",r[r.location_and_speed=10855]="location_and_speed",r[r.location_name=10933]="location_name",r[r.longitude=10927]="longitude",r[r.magnetic_declination=10796]="magnetic_declination",r[r.magnetic_flux_density_2D=10912]="magnetic_flux_density_2D",r[r.magnetic_flux_density_3D=10913]="magnetic_flux_density_3D",r[r.manufacturer_name_string=10793]="manufacturer_name_string",r[r.maximum_recommended_heart_rate=10897]="maximum_recommended_heart_rate",r[r.measurement_interval=10785]="measurement_interval",r[r.model_number_string=10788]="model_number_string",r[r.navigation=10856]="navigation",r[r.new_alert=10822]="new_alert",r[r["gap.peripheral_preferred_connection_parameters"]=10756]="gap.peripheral_preferred_connection_parameters",r[r["gap.peripheral_privacy_flag"]=10754]="gap.peripheral_privacy_flag",r[r.plx_continuous_measurement=10847]="plx_continuous_measurement",r[r.plx_features=10848]="plx_features",r[r.plx_spot_check_measurement=10846]="plx_spot_check_measurement",r[r.pnp_id=10832]="pnp_id",r[r.pollen_concentration=10869]="pollen_concentration",r[r.position_quality=10857]="position_quality",r[r.pressure=10861]="pressure",r[r.protocol_mode=10830]="protocol_mode",r[r.rainfall=10872]="rainfall",r[r["gap.reconnection_address"]=10755]="gap.reconnection_address",r[r.record_access_control_point=10834]="record_access_control_point",r[r.reference_time_information=10772]="reference_time_information",r[r.report=10829]="report",r[r.report_map=10827]="report_map",r[r.resting_heart_rate=10898]="resting_heart_rate",r[r.ringer_control_point=10816]="ringer_control_point",r[r.ringer_setting=10817]="ringer_setting",r[r.rsc_feature=10836]="rsc_feature",r[r.rsc_measurement=10835]="rsc_measurement",r[r.sc_control_point=10837]="sc_control_point",r[r.scan_interval_window=10831]="scan_interval_window",r[r.scan_refresh=10801]="scan_refresh",r[r.sensor_location=10845]="sensor_location",r[r.serial_number_string=10789]="serial_number_string",r[r["gatt.service_changed"]=10757]="gatt.service_changed",r[r.software_revision_string=10792]="software_revision_string",r[r.sport_type_for_aerobic_and_anaerobic_thresholds=10899]="sport_type_for_aerobic_and_anaerobic_thresholds",r[r.supported_new_alert_category=10823]="supported_new_alert_category",r[r.supported_unread_alert_category=10824]="supported_unread_alert_category",r[r.system_id=10787]="system_id",r[r.temperature=10862]="temperature",r[r.temperature_measurement=10780]="temperature_measurement",r[r.temperature_type=10781]="temperature_type",r[r.three_zone_heart_rate_limits=10900]="three_zone_heart_rate_limits",r[r.time_accuracy=10770]="time_accuracy",r[r.time_source=10771]="time_source",r[r.time_update_control_point=10774]="time_update_control_point",r[r.time_update_state=10775]="time_update_state",r[r.time_with_dst=10769]="time_with_dst",r[r.time_zone=10766]="time_zone",r[r.true_wind_direction=10865]="true_wind_direction",r[r.true_wind_speed=10864]="true_wind_speed",r[r.two_zone_heart_rate_limit=10901]="two_zone_heart_rate_limit",r[r.tx_power_level=10759]="tx_power_level",r[r.uncertainty=10932]="uncertainty",r[r.unread_alert_status=10821]="unread_alert_status",r[r.user_control_point=10911]="user_control_point",r[r.user_index=10906]="user_index",r[r.uv_index=10870]="uv_index",r[r.vo2_max=10902]="vo2_max",r[r.waist_circumference=10903]="waist_circumference",r[r.weight=10904]="weight",r[r.weight_measurement=10909]="weight_measurement",r[r.weight_scale_feature=10910]="weight_scale_feature",r[r.wind_chill=10873]="wind_chill",(n=e.bluetoothDescriptors||(e.bluetoothDescriptors={}))[n["gatt.characteristic_extended_properties"]=10496]="gatt.characteristic_extended_properties",n[n["gatt.characteristic_user_description"]=10497]="gatt.characteristic_user_description",n[n["gatt.client_characteristic_configuration"]=10498]="gatt.client_characteristic_configuration",n[n["gatt.server_characteristic_configuration"]=10499]="gatt.server_characteristic_configuration",n[n["gatt.characteristic_presentation_format"]=10500]="gatt.characteristic_presentation_format",n[n["gatt.characteristic_aggregate_format"]=10501]="gatt.characteristic_aggregate_format",n[n.valid_range=10502]="valid_range",n[n.external_report_reference=10503]="external_report_reference",n[n.report_reference=10504]="report_reference",n[n.number_of_digitals=10505]="number_of_digitals",n[n.value_trigger_setting=10506]="value_trigger_setting",n[n.es_configuration=10507]="es_configuration",n[n.es_measurement=10508]="es_measurement",n[n.es_trigger_setting=10509]="es_trigger_setting",n[n.time_trigger_setting=10510]="time_trigger_setting";class E extends a{constructor(){super(),this.deviceHandles={},this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},this.discoverFn=null,this.initialised=!1,this.enabled=!1,this.os="browser",this.enabled=this.state,t.on("stateChange",()=>{this.enabled!==this.state&&(this.enabled=this.state,this.emit(E.EVENT_ENABLED,this.enabled))})}get state(){return"poweredOn"===t.state}init(e){if(this.initialised)return e();t.on("discover",e=>{this.discoverFn&&this.discoverFn(e)}),this.initialised=!0,e()}checkForError(e,t,i){return function(r){if(r)e(r);else if("function"==typeof t){const e=[].slice.call(arguments,1);null===i?t.apply(this,e):setTimeout(()=>t.apply(this,e),i)}}}bufferToDataView(e){const t=new Uint8Array(e).buffer;return new DataView(t)}dataViewToBuffer(e){const t=new Uint8Array(e.buffer);return new Buffer(t)}validDevice(e,t){if(0===t.length)return!0;if(!e.advertisement.serviceUuids)return!1;const i=e.advertisement.serviceUuids.map(e=>g(e));return t.some(e=>i.indexOf(e)>=0)}deviceToBluetoothDevice(e){const t=e.address&&"unknown"!==e.address?e.address:e.id,i=[];e.advertisement.serviceUuids&&e.advertisement.serviceUuids.forEach(e=>{i.push(g(e))});const r=new Map;if(e.advertisement.manufacturerData){const t=e.advertisement.manufacturerData.readUInt16LE(0),i=e.advertisement.manufacturerData.slice(2);r.set(("0000"+t.toString(16)).slice(-4),this.bufferToDataView(i))}const n=new Map;return e.advertisement.serviceData&&e.advertisement.serviceData.forEach(e=>{n.set(g(e.uuid),this.bufferToDataView(e.data))}),{id:t,name:e.advertisement.localName,_serviceUUIDs:i,adData:{rssi:e.rssi,txPower:e.advertisement.txPowerLevel,serviceData:n,manufacturerData:r}}}getEnabled(e){function i(){e(this.state)}"unknown"===t.state||"poweredOff"===t.state?t.once("stateChange",i.bind(this)):i.call(this)}startScan(e,i,r,n){this.discoverFn=t=>{if(this.validDevice(t,e)){const e=this.deviceToBluetoothDevice(t);this.deviceHandles[e.id]||(this.deviceHandles[e.id]=t,i(e))}},this.init(()=>{function e(){!0===this.state?t.startScanning([],!0,this.checkForError(n,r)):n("adapter not enabled")}this.deviceHandles={},"unknown"===t.state||"poweredOff"===t.state?t.once("stateChange",e.bind(this)):e.call(this)})}stopScan(e){this.discoverFn=null,t.stopScanning()}connect(e,t,i,r){const n=this.deviceHandles[e];n.removeAllListeners("connect"),n.removeAllListeners("disconnect"),n.once("connect",t),n.once("disconnect",()=>{this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},i()}),n.connect(this.checkForError(r))}disconnect(e,t){this.deviceHandles[e].disconnect(this.checkForError(t))}discoverServices(e,t,i,r){this.deviceHandles[e].discoverServices([],this.checkForError(r,e=>{const r=[];e.forEach(e=>{const i=g(e.uuid);(0===t.length||t.indexOf(i)>=0)&&(this.serviceHandles[i]||(this.serviceHandles[i]=e),r.push({uuid:i,primary:!0}))}),i(r)}))}discoverIncludedServices(e,t,i,r){this.serviceHandles[e].discoverIncludedServices([],this.checkForError(r,e=>{const r=[];e.forEach(e=>{const i=g(e.uuid);(0===t.length||t.indexOf(i)>=0)&&(this.serviceHandles[i]||(this.serviceHandles[i]=e),r.push({uuid:i,primary:!1}))},this),i(r)}))}discoverCharacteristics(e,t,i,r){this.serviceHandles[e].discoverCharacteristics([],this.checkForError(r,e=>{const r=[];e.forEach(e=>{const i=g(e.uuid);(0===t.length||t.indexOf(i)>=0)&&(this.characteristicHandles[i]||(this.characteristicHandles[i]=e),r.push({uuid:i,properties:{broadcast:e.properties.indexOf("broadcast")>=0,read:e.properties.indexOf("read")>=0,writeWithoutResponse:e.properties.indexOf("writeWithoutResponse")>=0,write:e.properties.indexOf("write")>=0,notify:e.properties.indexOf("notify")>=0,indicate:e.properties.indexOf("indicate")>=0,authenticatedSignedWrites:e.properties.indexOf("authenticatedSignedWrites")>=0,reliableWrite:e.properties.indexOf("reliableWrite")>=0,writableAuxiliaries:e.properties.indexOf("writableAuxiliaries")>=0}}),e.on("data",(e,t)=>{if(!0===t&&"function"==typeof this.charNotifies[i]){const t=this.bufferToDataView(e);this.charNotifies[i](t)}}))},this),i(r)}))}discoverDescriptors(e,t,i,r){const n=this.characteristicHandles[e];n.discoverDescriptors(this.checkForError(r,e=>{const r=[];e.forEach(e=>{const i=g(e.uuid);if(0===t.length||t.indexOf(i)>=0){const t=n.uuid+"-"+e.uuid;this.descriptorHandles[t]||(this.descriptorHandles[t]=e),r.push({uuid:i})}},this),i(r)}))}readCharacteristic(e,t,i){this.characteristicHandles[e].read(this.checkForError(i,e=>{const i=this.bufferToDataView(e);t(i)}))}writeCharacteristic(e,t,i,r,n){const s=this.dataViewToBuffer(t),a=this.characteristicHandles[e];void 0===n&&(n=a.properties.indexOf("writeWithoutResponse")>=0||a.properties.indexOf("authenticatedSignedWrites")>=0);const c="darwin"!==this.os&&n?25:null;a.write(s,n,this.checkForError(r,i,c))}enableNotify(e,t,i,r){if(this.charNotifies[e])return this.charNotifies[e]=t,i();this.characteristicHandles[e].once("notify",n=>{if(!0!==n)return r("notify failed to enable");this.charNotifies[e]=t,i()}),this.characteristicHandles[e].notify(!0,this.checkForError(r))}disableNotify(e,t,i){if(!this.charNotifies[e])return t();this.characteristicHandles[e].once("notify",r=>{if(!1!==r)return i("notify failed to disable");this.charNotifies[e]&&delete this.charNotifies[e],t()}),this.characteristicHandles[e].notify(!1,this.checkForError(i))}readDescriptor(e,t,i){this.descriptorHandles[e].readValue(this.checkForError(i,e=>{const i=this.bufferToDataView(e);t(i)}))}writeDescriptor(e,t,i,r){const n=this.dataViewToBuffer(t);this.descriptorHandles[e].writeValue(n,this.checkForError(r,i))}}E.EVENT_ENABLED="enabledchanged";const x=new E;class L{constructor(e){this.characteristic=null,this.uuid=null,this._value=null,this.handle=null,this.characteristic=e.characteristic,this.uuid=e.uuid,this._value=e.value,this.handle=`${this.characteristic.uuid}-${this.uuid}`}get value(){return this._value}readValue(){return new Promise((e,t)=>{if(!this.characteristic.service.device.gatt.connected)return t("readValue error: device not connected");x.readDescriptor(this.handle,t=>{this._value=t,e(t)},e=>{t("readValue error: "+e)})})}writeValue(e){return new Promise((t,i)=>{if(!this.characteristic.service.device.gatt.connected)return i("writeValue error: device not connected");const r=void 0!==e.buffer?e.buffer:e;const n=new DataView(r);x.writeDescriptor(this.handle,n,()=>{this._value=n,t()},e=>{i("writeValue error: "+e)})})}}class D{constructor(e,t){this.bubbles=!0,this.cancelable=!1,this.cancelBubble=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=0,this.isTrusted=!0,this.returnValue=!0,this.target=e,this.srcElement=e,this.currentTarget=e,this.type=t}composedPath(){return[]}initEvent(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i}preventDefault(){this.defaultPrevented=!0}stopImmediatePropagation(){}stopPropagation(){}}class P extends p{constructor(e){super(),this.service=null,this.uuid=null,this._value=null,this.handle=null,this.descriptors=null,this.service=e.service,this.uuid=e.uuid,this.properties=e.properties,this._value=e.value,this.handle=this.uuid}get value(){return this._value}set oncharacteristicvaluechanged(e){this._oncharacteristicvaluechanged&&this.removeEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged),this._oncharacteristicvaluechanged=e,this.addEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged)}setValue(e,t){this._value=e,t&&(this.dispatchEvent(new D(this,"characteristicvaluechanged")),this.service.dispatchEvent(new D(this,"characteristicvaluechanged")),this.service.device.dispatchEvent(new D(this,"characteristicvaluechanged")),this.service.device._bluetooth.dispatchEvent(new D(this,"characteristicvaluechanged")))}getDescriptor(e){return new Promise((t,i)=>this.service.device.gatt.connected?e?void this.getDescriptors(e).then(e=>{if(1!==e.length)return i("getDescriptor error: descriptor not found");t(e[0])}).catch(e=>{i("getDescriptor error: "+e)}):i("getDescriptor error: no descriptor specified"):i("getDescriptor error: device not connected"))}getDescriptors(e){return new Promise((t,i)=>{if(!this.service.device.gatt.connected)return i("getDescriptors error: device not connected");function r(){if(!e)return t(this.descriptors);const r=this.descriptors.filter(t=>t.uuid===y(e));if(1!==r.length)return i("getDescriptors error: descriptor not found");t(r)}if(this.descriptors)return r.call(this);x.discoverDescriptors(this.handle,[],e=>{this.descriptors=e.map(e=>(Object.assign(e,{characteristic:this}),new L(e))),r.call(this)},e=>{i("getDescriptors error: "+e)})})}readValue(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("readValue error: device not connected");x.readCharacteristic(this.handle,t=>{this.setValue(t,!0),e(t)},e=>{t("readValue error: "+e)})})}writeValue(e){return new Promise((t,i)=>{if(!this.service.device.gatt.connected)return i("writeValue error: device not connected");const r=void 0!==e.buffer?e.buffer:e;const n=new DataView(r);x.writeCharacteristic(this.handle,n,()=>{this.setValue(n),t()},e=>{i("writeValue error: "+e)})})}writeValueWithResponse(e){return new Promise((t,i)=>{if(!this.service.device.gatt.connected)return i("writeValue error: device not connected");const r=void 0!==e.buffer?e.buffer:e;const n=new DataView(r);x.writeCharacteristic(this.handle,n,()=>{this.setValue(n),t()},e=>{i("writeValue error: "+e)},!1)})}writeValueWithoutResponse(e){return new Promise((t,i)=>{if(!this.service.device.gatt.connected)return i("writeValue error: device not connected");const r=void 0!==e.buffer?e.buffer:e;const n=new DataView(r);x.writeCharacteristic(this.handle,n,()=>{this.setValue(n),t()},e=>{i("writeValue error: "+e)},!0)})}startNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("startNotifications error: device not connected");x.enableNotify(this.handle,e=>{this.setValue(e,!0)},()=>{e(this)},e=>{t("startNotifications error: "+e)})})}stopNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("stopNotifications error: device not connected");x.disableNotify(this.handle,()=>{e(this)},e=>{t("stopNotifications error: "+e)})})}}class S extends p{constructor(e){super(),this.device=null,this.uuid=null,this.isPrimary=!1,this.handle=null,this.services=null,this.characteristics=null,this.device=e.device,this.uuid=e.uuid,this.isPrimary=e.isPrimary,this.handle=this.uuid,this.dispatchEvent(new D(this,"serviceadded")),this.device.dispatchEvent(new D(this,"serviceadded")),this.device._bluetooth.dispatchEvent(new D(this,"serviceadded"))}set oncharacteristicvaluechanged(e){this._oncharacteristicvaluechanged&&this.removeEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged),this._oncharacteristicvaluechanged=e,this.addEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged)}set onserviceadded(e){this._onserviceadded&&this.removeEventListener("serviceadded",this._onserviceadded),this._onserviceadded=e,this.addEventListener("serviceadded",this._onserviceadded)}set onservicechanged(e){this._onservicechanged&&this.removeEventListener("servicechanged",this._onservicechanged),this._onservicechanged=e,this.addEventListener("servicechanged",this._onservicechanged)}set onserviceremoved(e){this._onserviceremoved&&this.removeEventListener("serviceremoved",this._onserviceremoved),this._onserviceremoved=e,this.addEventListener("serviceremoved",this._onserviceremoved)}getCharacteristic(e){return new Promise((t,i)=>this.device.gatt.connected?e?void this.getCharacteristics(e).then(e=>{if(1!==e.length)return i("getCharacteristic error: characteristic not found");t(e[0])}).catch(e=>{i("getCharacteristic error: "+e)}):i("getCharacteristic error: no characteristic specified"):i("getCharacteristic error: device not connected"))}getCharacteristics(e){return new Promise((t,i)=>{if(!this.device.gatt.connected)return i("getCharacteristics error: device not connected");function r(){if(!e)return t(this.characteristics);e=b(e);const r=this.characteristics.filter(t=>t.uuid===e);if(1!==r.length)return i("getCharacteristics error: characteristic not found");t(r)}if(this.characteristics)return r.call(this);x.discoverCharacteristics(this.handle,[],e=>{this.characteristics=e.map(e=>(Object.assign(e,{service:this}),new P(e))),r.call(this)},e=>{i("getCharacteristics error: "+e)})})}getIncludedService(e){return new Promise((t,i)=>this.device.gatt.connected?e?void this.getIncludedServices(e).then(e=>{if(1!==e.length)return i("getIncludedService error: service not found");t(e[0])}).catch(e=>{i("getIncludedService error: "+e)}):i("getIncludedService error: no service specified"):i("getIncludedService error: device not connected"))}getIncludedServices(e){return new Promise((t,i)=>{if(!this.device.gatt.connected)return i("getIncludedServices error: device not connected");function r(){if(!e)return t(this.services);const r=this.services.filter(t=>t.uuid===w(e));if(1!==r.length)return i("getIncludedServices error: service not found");t(r)}if(this.services)return r.call(this);x.discoverIncludedServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new S(e))),r.call(this)},e=>{i("getIncludedServices error: "+e)})})}}class V{constructor(e){this.device=null,this._connected=!1,this.handle=null,this.services=null,this.device=e,this.handle=this.device.id}get connected(){return this._connected}connect(){return new Promise((e,t)=>{if(this.connected)return t("connect error: device already connected");x.connect(this.handle,()=>{this._connected=!0,e(this)},()=>{this.services=null,this._connected=!1,this.device.dispatchEvent(new D(this.device,"gattserverdisconnected")),this.device._bluetooth.dispatchEvent(new D(this.device,"gattserverdisconnected"))},e=>{t("connect Error: "+e)})})}disconnect(){x.disconnect(this.handle),this._connected=!1}getPrimaryService(e){return new Promise((t,i)=>this.connected?e?void this.getPrimaryServices(e).then(e=>{if(1!==e.length)return i("getPrimaryService error: service not found");t(e[0])}).catch(e=>{i("getPrimaryService error: "+e)}):i("getPrimaryService error: no service specified"):i("getPrimaryService error: device not connected"))}getPrimaryServices(e){return new Promise((t,i)=>{if(!this.connected)return i("getPrimaryServices error: device not connected");function r(){if(!e)return t(this.services);const r=this.services.filter(t=>t.uuid===w(e));if(1!==r.length)return i("getPrimaryServices error: service not found");t(r)}if(this.services)return r.call(this);x.discoverServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new S(e))),r.call(this)},e=>{i("getPrimaryServices error: "+e)})})}}class C extends p{constructor(e){super(),this.id=null,this.name=null,this.gatt=null,this.watchingAdvertisements=!1,this._bluetooth=null,this._allowedServices=[],this._serviceUUIDs=[],this.id=e.id,this.name=e.name,this.gatt=e.gatt,this.watchAdvertisements=e.watchAdvertisements,this.adData=e.adData,this._bluetooth=e._bluetooth,this._allowedServices=e._allowedServices,this._serviceUUIDs=e._serviceUUIDs,this.name||(this.name=`Unknown or Unsupported Device (${this.id})`),this.gatt||(this.gatt=new V(this))}set oncharacteristicvaluechanged(e){this._oncharacteristicvaluechanged&&this.removeEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged),this._oncharacteristicvaluechanged=e,this.addEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged)}set onserviceadded(e){this._onserviceadded&&this.removeEventListener("serviceadded",this._onserviceadded),this._onserviceadded=e,this.addEventListener("serviceadded",this._onserviceadded)}set onservicechanged(e){this._onservicechanged&&this.removeEventListener("servicechanged",this._onservicechanged),this._onservicechanged=e,this.addEventListener("servicechanged",this._onservicechanged)}set onserviceremoved(e){this._onserviceremoved&&this.removeEventListener("serviceremoved",this._onserviceremoved),this._onserviceremoved=e,this.addEventListener("serviceremoved",this._onserviceremoved)}set ongattserverdisconnected(e){this._ongattserverdisconnected&&this.removeEventListener("gattserverdisconnected",this._ongattserverdisconnected),this._ongattserverdisconnected=e,this.addEventListener("gattserverdisconnected",this._ongattserverdisconnected)}set onadvertisementreceived(e){this._onadvertisementreceived&&this.removeEventListener("advertisementreceived",this._onadvertisementreceived),this._onadvertisementreceived=e,this.addEventListener("advertisementreceived",this._onadvertisementreceived)}watchAdvertisements(){return new Promise((e,t)=>{t("watchAdvertisements error: method not implemented")})}unwatchAdvertisements(){return new Promise((e,t)=>{t("unwatchAdvertisements error: method not implemented")})}}class k extends p{constructor(e){super(),this.deviceFound=null,this.scanTime=10240,this.scanner=null,e=e||{},this.referringDevice=e.referringDevice,this.deviceFound=e.deviceFound,e.scanTime&&(this.scanTime=1e3*e.scanTime),x.on(E.EVENT_ENABLED,e=>{this.dispatchEvent(new D(this,"availabilitychanged"))})}set oncharacteristicvaluechanged(e){this._oncharacteristicvaluechanged&&this.removeEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged),this._oncharacteristicvaluechanged=e,this.addEventListener("characteristicvaluechanged",this._oncharacteristicvaluechanged)}set onserviceadded(e){this._onserviceadded&&this.removeEventListener("serviceadded",this._onserviceadded),this._onserviceadded=e,this.addEventListener("serviceadded",this._onserviceadded)}set onservicechanged(e){this._onservicechanged&&this.removeEventListener("servicechanged",this._onservicechanged),this._onservicechanged=e,this.addEventListener("servicechanged",this._onservicechanged)}set onserviceremoved(e){this._onserviceremoved&&this.removeEventListener("serviceremoved",this._onserviceremoved),this._onserviceremoved=e,this.addEventListener("serviceremoved",this._onserviceremoved)}set ongattserverdisconnected(e){this._ongattserverdisconnected&&this.removeEventListener("gattserverdisconnected",this._ongattserverdisconnected),this._ongattserverdisconnected=e,this.addEventListener("gattserverdisconnected",this._ongattserverdisconnected)}set onadvertisementreceived(e){this._onadvertisementreceived&&this.removeEventListener("advertisementreceived",this._onadvertisementreceived),this._onadvertisementreceived=e,this.addEventListener("advertisementreceived",this._onadvertisementreceived)}set onavailabilitychanged(e){this._onavailabilitychanged&&this.removeEventListener("availabilitychanged",this._onavailabilitychanged),this._onavailabilitychanged=e,this.addEventListener("availabilitychanged",this._onavailabilitychanged)}filterDevice(e,t,i){let r=!1;return e.forEach(e=>{if(!e.name||e.name===t.name){if(e.namePrefix){if(!t.name||e.namePrefix.length>t.name.length)return;if(e.namePrefix!==t.name.substr(0,e.namePrefix.length))return}if(e.services){const r=e.services.map(w);if(!r.every(e=>t._serviceUUIDs.indexOf(e)>-1))return;i=i.concat(r)}r=!0}}),!!r&&t}getAvailability(){return new Promise((e,t)=>{x.getEnabled(t=>{e(t)})})}requestDevice(e={filters:[]}){return new Promise((t,i)=>{if(null!==this.scanner)return i("requestDevice error: request in progress");const r=e=>void 0!==e.filters;let n=[];if(r(e)){if(0===e.filters.length)return i(new TypeError("requestDevice error: no filters specified"));if(e.filters.some(e=>0===Object.keys(e).length))return i(new TypeError("requestDevice error: empty filter specified"));if(e.filters.some(e=>void 0!==e.namePrefix&&""===e.namePrefix))return i(new TypeError("requestDevice error: empty namePrefix specified"));e.filters.forEach(e=>{e.services&&(n=n.concat(e.services.map(w))),n=n.filter((e,t,i)=>i.indexOf(e)===t)})}else if(!0!==e.acceptAllDevices)return i(new TypeError("requestDevice error: specify filters or acceptAllDevices"));let s=!1;x.startScan(n,i=>{let n=[];function a(e){this.cancelRequest().then(()=>{t(e)})}if(r(e)&&(i=this.filterDevice(e.filters,i,n)),i){s=!0,e.optionalServices&&(n=n.concat(e.optionalServices.map(w)));const t=n.filter((e,t,i)=>i.indexOf(e)===t);Object.assign(i,{_bluetooth:this,_allowedServices:t});const r=new C(i);this.deviceFound&&!0!==this.deviceFound(r,function(){a.call(this,r)}.bind(this))||a.call(this,r)}},()=>{this.scanner=setTimeout(()=>{this.cancelRequest().then(()=>{s||i("requestDevice error: no devices found")})},this.scanTime)},e=>i("requestDevice error: "+e))})}cancelRequest(){return new Promise((e,t)=>{this.scanner&&(clearTimeout(this.scanner),this.scanner=null,x.stopScan()),e()})}}k.EVENT_AVAILABILITY="availabilitychanged";const O=new k;e.Bluetooth=k,e.bluetooth=O,e.getCanonicalUUID=g,e.getCharacteristicUUID=b,e.getDescriptorUUID=y,e.getServiceUUID=w,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=webbluetooth.umd.js.map
