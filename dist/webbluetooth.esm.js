import{on as e,state as t,once as r,stopScanning as i,startScanning as n}from"@abandonware/noble";var s,a,o;function c(){}function _(){_.init.call(this)}function d(e){return void 0===e._maxListeners?_.defaultMaxListeners:e._maxListeners}function u(e,t,r){if(t)e.call(r);else for(var i=e.length,n=w(e,i),s=0;s<i;++s)n[s].call(r)}function l(e,t,r,i){if(t)e.call(r,i);else for(var n=e.length,s=w(e,n),a=0;a<n;++a)s[a].call(r,i)}function h(e,t,r,i,n){if(t)e.call(r,i,n);else for(var s=e.length,a=w(e,s),o=0;o<s;++o)a[o].call(r,i,n)}function f(e,t,r,i,n,s){if(t)e.call(r,i,n,s);else for(var a=e.length,o=w(e,a),c=0;c<a;++c)o[c].call(r,i,n,s)}function p(e,t,r,i){if(t)e.apply(r,i);else for(var n=e.length,s=w(e,n),a=0;a<n;++a)s[a].apply(r,i)}function m(e,t,r,i){var n,s,a,o;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),s=e._events),a=s[t]):(s=e._events=new c,e._eventsCount=0),a){if("function"==typeof a?a=s[t]=i?[r,a]:[a,r]:i?a.unshift(r):a.push(r),!a.warned&&(n=d(e))&&n>0&&a.length>n){a.warned=!0;var _=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");_.name="MaxListenersExceededWarning",_.emitter=e,_.type=t,_.count=a.length,o=_,"function"==typeof console.warn?console.warn(o):console.log(o)}}else a=s[t]=r,++e._eventsCount;return e}function v(e,t,r){var i=!1;function n(){e.removeListener(t,n),i||(i=!0,r.apply(e,arguments))}return n.listener=r,n}function g(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function w(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}c.prototype=Object.create(null),_.EventEmitter=_,_.usingDomains=!1,_.prototype.domain=void 0,_.prototype._events=void 0,_.prototype._maxListeners=void 0,_.defaultMaxListeners=10,_.init=function(){this.domain=null,_.usingDomains&&(void 0).active&&(void 0).Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new c,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},_.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},_.prototype.getMaxListeners=function(){return d(this)},_.prototype.emit=function(e){var t,r,i,n,s,a,o,c="error"===e;if(a=this._events)c=c&&null==a.error;else if(!c)return!1;if(o=this.domain,c){if(t=arguments[1],!o){if(t instanceof Error)throw t;var _=new Error('Uncaught, unspecified "error" event. ('+t+")");throw _.context=t,_}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=o,t.domainThrown=!1,o.emit("error",t),!1}if(!(r=a[e]))return!1;var d="function"==typeof r;switch(i=arguments.length){case 1:u(r,d,this);break;case 2:l(r,d,this,arguments[1]);break;case 3:h(r,d,this,arguments[1],arguments[2]);break;case 4:f(r,d,this,arguments[1],arguments[2],arguments[3]);break;default:for(n=new Array(i-1),s=1;s<i;s++)n[s-1]=arguments[s];p(r,d,this,n)}return!0},_.prototype.addListener=function(e,t){return m(this,e,t,!1)},_.prototype.on=_.prototype.addListener,_.prototype.prependListener=function(e,t){return m(this,e,t,!0)},_.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,v(this,e,t)),this},_.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,v(this,e,t)),this},_.prototype.removeListener=function(e,t){var r,i,n,s,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(r=i[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new c:(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(n=-1,s=r.length;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){a=r[s].listener,n=s;break}if(n<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new c,this;delete i[e]}else!function(e,t){for(var r=t,i=r+1,n=e.length;i<n;r+=1,i+=1)e[r]=e[i];e.pop()}(r,n);i.removeListener&&this.emit("removeListener",e,a||t)}return this},_.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new c,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new c:delete r[e]),this;if(0===arguments.length){for(var i,n=Object.keys(r),s=0;s<n.length;++s)"removeListener"!==(i=n[s])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new c,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},_.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},_.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):g.call(e,t)},_.prototype.listenerCount=g,_.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class y extends _{constructor(){super(...arguments),this.isEventListenerObject=e=>void 0!==e.handleEvent}addEventListener(e,t){if(t){const r=this.isEventListenerObject(t)?t.handleEvent:t;super.addListener(e,r)}}removeEventListener(e,t){if(t){const r=this.isEventListenerObject(t)?t.handleEvent:t;super.removeListener(e,r)}}dispatchEvent(e,t){let r;return r="string"==typeof e?new CustomEvent(e,{detail:t}):e,super.emit(r.type,r)}}function b(e){return"number"==typeof e&&(e=e.toString(16)),(e=e.toLowerCase()).length<=8&&(e=("00000000"+e).slice(-8)+"-0000-1000-8000-00805f9b34fb"),32===e.length&&(e=e.match(/^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/).splice(1).join("-")),e}function x(e){return"string"==typeof e&&s[e]&&(e=s[e]),b(e)}function E(e){return"string"==typeof e&&a[e]&&(e=a[e]),b(e)}function D(e){return"string"==typeof e&&o[e]&&(e=o[e]),b(e)}!function(e){e[e.alert_notification=6161]="alert_notification",e[e.automation_io=6165]="automation_io",e[e.battery_service=6159]="battery_service",e[e.blood_pressure=6160]="blood_pressure",e[e.body_composition=6171]="body_composition",e[e.bond_management=6174]="bond_management",e[e.continuous_glucose_monitoring=6175]="continuous_glucose_monitoring",e[e.current_time=6149]="current_time",e[e.cycling_power=6168]="cycling_power",e[e.cycling_speed_and_cadence=6166]="cycling_speed_and_cadence",e[e.device_information=6154]="device_information",e[e.environmental_sensing=6170]="environmental_sensing",e[e.generic_access=6144]="generic_access",e[e.generic_attribute=6145]="generic_attribute",e[e.glucose=6152]="glucose",e[e.health_thermometer=6153]="health_thermometer",e[e.heart_rate=6157]="heart_rate",e[e.human_interface_device=6162]="human_interface_device",e[e.immediate_alert=6146]="immediate_alert",e[e.indoor_positioning=6177]="indoor_positioning",e[e.internet_protocol_support=6176]="internet_protocol_support",e[e.link_loss=6147]="link_loss",e[e.location_and_navigation=6169]="location_and_navigation",e[e.next_dst_change=6151]="next_dst_change",e[e.phone_alert_status=6158]="phone_alert_status",e[e.pulse_oximeter=6178]="pulse_oximeter",e[e.reference_time_update=6150]="reference_time_update",e[e.running_speed_and_cadence=6164]="running_speed_and_cadence",e[e.scan_parameters=6163]="scan_parameters",e[e.tx_power=6148]="tx_power",e[e.user_data=6172]="user_data",e[e.weight_scale=6173]="weight_scale"}(s||(s={})),function(e){e[e.aerobic_heart_rate_lower_limit=10878]="aerobic_heart_rate_lower_limit",e[e.aerobic_heart_rate_upper_limit=10884]="aerobic_heart_rate_upper_limit",e[e.aerobic_threshold=10879]="aerobic_threshold",e[e.age=10880]="age",e[e.aggregate=10842]="aggregate",e[e.alert_category_id=10819]="alert_category_id",e[e.alert_category_id_bit_mask=10818]="alert_category_id_bit_mask",e[e.alert_level=10758]="alert_level",e[e.alert_notification_control_point=10820]="alert_notification_control_point",e[e.alert_status=10815]="alert_status",e[e.altitude=10931]="altitude",e[e.anaerobic_heart_rate_lower_limit=10881]="anaerobic_heart_rate_lower_limit",e[e.anaerobic_heart_rate_upper_limit=10882]="anaerobic_heart_rate_upper_limit",e[e.anaerobic_threshold=10883]="anaerobic_threshold",e[e.analog=10840]="analog",e[e.apparent_wind_direction=10867]="apparent_wind_direction",e[e.apparent_wind_speed=10866]="apparent_wind_speed",e[e["gap.appearance"]=10753]="gap.appearance",e[e.barometric_pressure_trend=10915]="barometric_pressure_trend",e[e.battery_level=10777]="battery_level",e[e.blood_pressure_feature=10825]="blood_pressure_feature",e[e.blood_pressure_measurement=10805]="blood_pressure_measurement",e[e.body_composition_feature=10907]="body_composition_feature",e[e.body_composition_measurement=10908]="body_composition_measurement",e[e.body_sensor_location=10808]="body_sensor_location",e[e.bond_management_control_point=10916]="bond_management_control_point",e[e.bond_management_feature=10917]="bond_management_feature",e[e.boot_keyboard_input_report=10786]="boot_keyboard_input_report",e[e.boot_keyboard_output_report=10802]="boot_keyboard_output_report",e[e.boot_mouse_input_report=10803]="boot_mouse_input_report",e[e["gap.central_address_resolution_support"]=10918]="gap.central_address_resolution_support",e[e.cgm_feature=10920]="cgm_feature",e[e.cgm_measurement=10919]="cgm_measurement",e[e.cgm_session_run_time=10923]="cgm_session_run_time",e[e.cgm_session_start_time=10922]="cgm_session_start_time",e[e.cgm_specific_ops_control_point=10924]="cgm_specific_ops_control_point",e[e.cgm_status=10921]="cgm_status",e[e.csc_feature=10844]="csc_feature",e[e.csc_measurement=10843]="csc_measurement",e[e.current_time=10795]="current_time",e[e.cycling_power_control_point=10854]="cycling_power_control_point",e[e.cycling_power_feature=10853]="cycling_power_feature",e[e.cycling_power_measurement=10851]="cycling_power_measurement",e[e.cycling_power_vector=10852]="cycling_power_vector",e[e.database_change_increment=10905]="database_change_increment",e[e.date_of_birth=10885]="date_of_birth",e[e.date_of_threshold_assessment=10886]="date_of_threshold_assessment",e[e.date_time=10760]="date_time",e[e.day_date_time=10762]="day_date_time",e[e.day_of_week=10761]="day_of_week",e[e.descriptor_value_changed=10877]="descriptor_value_changed",e[e["gap.device_name"]=10752]="gap.device_name",e[e.dew_point=10875]="dew_point",e[e.digital=10838]="digital",e[e.dst_offset=10765]="dst_offset",e[e.elevation=10860]="elevation",e[e.email_address=10887]="email_address",e[e.exact_time_256=10764]="exact_time_256",e[e.fat_burn_heart_rate_lower_limit=10888]="fat_burn_heart_rate_lower_limit",e[e.fat_burn_heart_rate_upper_limit=10889]="fat_burn_heart_rate_upper_limit",e[e.firmware_revision_string=10790]="firmware_revision_string",e[e.first_name=10890]="first_name",e[e.five_zone_heart_rate_limits=10891]="five_zone_heart_rate_limits",e[e.floor_number=10930]="floor_number",e[e.gender=10892]="gender",e[e.glucose_feature=10833]="glucose_feature",e[e.glucose_measurement=10776]="glucose_measurement",e[e.glucose_measurement_context=10804]="glucose_measurement_context",e[e.gust_factor=10868]="gust_factor",e[e.hardware_revision_string=10791]="hardware_revision_string",e[e.heart_rate_control_point=10809]="heart_rate_control_point",e[e.heart_rate_max=10893]="heart_rate_max",e[e.heart_rate_measurement=10807]="heart_rate_measurement",e[e.heat_index=10874]="heat_index",e[e.height=10894]="height",e[e.hid_control_point=10828]="hid_control_point",e[e.hid_information=10826]="hid_information",e[e.hip_circumference=10895]="hip_circumference",e[e.humidity=10863]="humidity",e[e["ieee_11073-20601_regulatory_certification_data_list"]=10794]="ieee_11073-20601_regulatory_certification_data_list",e[e.indoor_positioning_configuration=10925]="indoor_positioning_configuration",e[e.intermediate_blood_pressure=10806]="intermediate_blood_pressure",e[e.intermediate_temperature=10782]="intermediate_temperature",e[e.irradiance=10871]="irradiance",e[e.language=10914]="language",e[e.last_name=10896]="last_name",e[e.latitude=10926]="latitude",e[e.ln_control_point=10859]="ln_control_point",e[e.ln_feature=10858]="ln_feature",e[e["local_east_coordinate.xml"]=10929]="local_east_coordinate.xml",e[e.local_north_coordinate=10928]="local_north_coordinate",e[e.local_time_information=10767]="local_time_information",e[e.location_and_speed=10855]="location_and_speed",e[e.location_name=10933]="location_name",e[e.longitude=10927]="longitude",e[e.magnetic_declination=10796]="magnetic_declination",e[e.magnetic_flux_density_2D=10912]="magnetic_flux_density_2D",e[e.magnetic_flux_density_3D=10913]="magnetic_flux_density_3D",e[e.manufacturer_name_string=10793]="manufacturer_name_string",e[e.maximum_recommended_heart_rate=10897]="maximum_recommended_heart_rate",e[e.measurement_interval=10785]="measurement_interval",e[e.model_number_string=10788]="model_number_string",e[e.navigation=10856]="navigation",e[e.new_alert=10822]="new_alert",e[e["gap.peripheral_preferred_connection_parameters"]=10756]="gap.peripheral_preferred_connection_parameters",e[e["gap.peripheral_privacy_flag"]=10754]="gap.peripheral_privacy_flag",e[e.plx_continuous_measurement=10847]="plx_continuous_measurement",e[e.plx_features=10848]="plx_features",e[e.plx_spot_check_measurement=10846]="plx_spot_check_measurement",e[e.pnp_id=10832]="pnp_id",e[e.pollen_concentration=10869]="pollen_concentration",e[e.position_quality=10857]="position_quality",e[e.pressure=10861]="pressure",e[e.protocol_mode=10830]="protocol_mode",e[e.rainfall=10872]="rainfall",e[e["gap.reconnection_address"]=10755]="gap.reconnection_address",e[e.record_access_control_point=10834]="record_access_control_point",e[e.reference_time_information=10772]="reference_time_information",e[e.report=10829]="report",e[e.report_map=10827]="report_map",e[e.resting_heart_rate=10898]="resting_heart_rate",e[e.ringer_control_point=10816]="ringer_control_point",e[e.ringer_setting=10817]="ringer_setting",e[e.rsc_feature=10836]="rsc_feature",e[e.rsc_measurement=10835]="rsc_measurement",e[e.sc_control_point=10837]="sc_control_point",e[e.scan_interval_window=10831]="scan_interval_window",e[e.scan_refresh=10801]="scan_refresh",e[e.sensor_location=10845]="sensor_location",e[e.serial_number_string=10789]="serial_number_string",e[e["gatt.service_changed"]=10757]="gatt.service_changed",e[e.software_revision_string=10792]="software_revision_string",e[e.sport_type_for_aerobic_and_anaerobic_thresholds=10899]="sport_type_for_aerobic_and_anaerobic_thresholds",e[e.supported_new_alert_category=10823]="supported_new_alert_category",e[e.supported_unread_alert_category=10824]="supported_unread_alert_category",e[e.system_id=10787]="system_id",e[e.temperature=10862]="temperature",e[e.temperature_measurement=10780]="temperature_measurement",e[e.temperature_type=10781]="temperature_type",e[e.three_zone_heart_rate_limits=10900]="three_zone_heart_rate_limits",e[e.time_accuracy=10770]="time_accuracy",e[e.time_source=10771]="time_source",e[e.time_update_control_point=10774]="time_update_control_point",e[e.time_update_state=10775]="time_update_state",e[e.time_with_dst=10769]="time_with_dst",e[e.time_zone=10766]="time_zone",e[e.true_wind_direction=10865]="true_wind_direction",e[e.true_wind_speed=10864]="true_wind_speed",e[e.two_zone_heart_rate_limit=10901]="two_zone_heart_rate_limit",e[e.tx_power_level=10759]="tx_power_level",e[e.uncertainty=10932]="uncertainty",e[e.unread_alert_status=10821]="unread_alert_status",e[e.user_control_point=10911]="user_control_point",e[e.user_index=10906]="user_index",e[e.uv_index=10870]="uv_index",e[e.vo2_max=10902]="vo2_max",e[e.waist_circumference=10903]="waist_circumference",e[e.weight=10904]="weight",e[e.weight_measurement=10909]="weight_measurement",e[e.weight_scale_feature=10910]="weight_scale_feature",e[e.wind_chill=10873]="wind_chill"}(a||(a={})),function(e){e[e["gatt.characteristic_extended_properties"]=10496]="gatt.characteristic_extended_properties",e[e["gatt.characteristic_user_description"]=10497]="gatt.characteristic_user_description",e[e["gatt.client_characteristic_configuration"]=10498]="gatt.client_characteristic_configuration",e[e["gatt.server_characteristic_configuration"]=10499]="gatt.server_characteristic_configuration",e[e["gatt.characteristic_presentation_format"]=10500]="gatt.characteristic_presentation_format",e[e["gatt.characteristic_aggregate_format"]=10501]="gatt.characteristic_aggregate_format",e[e.valid_range=10502]="valid_range",e[e.external_report_reference=10503]="external_report_reference",e[e.report_reference=10504]="report_reference",e[e.number_of_digitals=10505]="number_of_digitals",e[e.value_trigger_setting=10506]="value_trigger_setting",e[e.es_configuration=10507]="es_configuration",e[e.es_measurement=10508]="es_measurement",e[e.es_trigger_setting=10509]="es_trigger_setting",e[e.time_trigger_setting=10510]="time_trigger_setting"}(o||(o={}));class L extends _{constructor(){super(),this.deviceHandles={},this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},this.discoverFn=null,this.initialised=!1,this.enabled=!1,this.os="browser",this.enabled=this.state,e("stateChange",()=>{this.enabled!==this.state&&(this.enabled=this.state,this.emit(L.EVENT_ENABLED,this.enabled))})}get state(){return"poweredOn"===t}init(t){if(this.initialised)return t();e("discover",e=>{this.discoverFn&&this.discoverFn(e)}),this.initialised=!0,t()}checkForError(e,t,r){return function(i){if(i)e(i);else if("function"==typeof t){const e=[].slice.call(arguments,1);null===r?t.apply(this,e):setTimeout(()=>t.apply(this,e),r)}}}bufferToDataView(e){const t=new Uint8Array(e).buffer;return new DataView(t)}dataViewToBuffer(e){const t=new Uint8Array(e.buffer);return new Buffer(t)}validDevice(e,t){if(0===t.length)return!0;if(!e.advertisement.serviceUuids)return!1;const r=e.advertisement.serviceUuids.map(e=>b(e));return t.some(e=>r.indexOf(e)>=0)}deviceToBluetoothDevice(e){const t=e.address&&"unknown"!==e.address?e.address:e.id,r=[];e.advertisement.serviceUuids&&e.advertisement.serviceUuids.forEach(e=>{r.push(b(e))});const i=new Map;if(e.advertisement.manufacturerData){const t=e.advertisement.manufacturerData.readUInt16LE(0),r=e.advertisement.manufacturerData.slice(2);i.set(("0000"+t.toString(16)).slice(-4),this.bufferToDataView(r))}const n=new Map;return e.advertisement.serviceData&&e.advertisement.serviceData.forEach(e=>{n.set(b(e.uuid),this.bufferToDataView(e.data))}),{id:t,name:e.advertisement.localName,_serviceUUIDs:r,adData:{rssi:e.rssi,txPower:e.advertisement.txPowerLevel,serviceData:n,manufacturerData:i}}}getEnabled(e){function i(){e(this.state)}"unknown"===t||"poweredOff"===t?r("stateChange",i.bind(this)):i.call(this)}startScan(e,i,s,a){this.discoverFn=t=>{if(this.validDevice(t,e)){const e=this.deviceToBluetoothDevice(t);this.deviceHandles[e.id]||(this.deviceHandles[e.id]=t,i(e))}},this.init(()=>{function e(){!0===this.state?n([],!0,this.checkForError(a,s)):a("adapter not enabled")}this.deviceHandles={},"unknown"===t||"poweredOff"===t?r("stateChange",e.bind(this)):e.call(this)})}stopScan(e){this.discoverFn=null,i()}connect(e,t,r,i){const n=this.deviceHandles[e];n.removeAllListeners("connect"),n.removeAllListeners("disconnect"),n.once("connect",t),n.once("disconnect",()=>{this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},r()}),n.connect(this.checkForError(i))}disconnect(e,t){this.deviceHandles[e].disconnect(this.checkForError(t))}discoverServices(e,t,r,i){this.deviceHandles[e].discoverServices([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=b(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.serviceHandles[r]||(this.serviceHandles[r]=e),i.push({uuid:r,primary:!0}))}),r(i)}))}discoverIncludedServices(e,t,r,i){this.serviceHandles[e].discoverIncludedServices([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=b(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.serviceHandles[r]||(this.serviceHandles[r]=e),i.push({uuid:r,primary:!1}))},this),r(i)}))}discoverCharacteristics(e,t,r,i){this.serviceHandles[e].discoverCharacteristics([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=b(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.characteristicHandles[r]||(this.characteristicHandles[r]=e),i.push({uuid:r,properties:{broadcast:e.properties.indexOf("broadcast")>=0,read:e.properties.indexOf("read")>=0,writeWithoutResponse:e.properties.indexOf("writeWithoutResponse")>=0,write:e.properties.indexOf("write")>=0,notify:e.properties.indexOf("notify")>=0,indicate:e.properties.indexOf("indicate")>=0,authenticatedSignedWrites:e.properties.indexOf("authenticatedSignedWrites")>=0,reliableWrite:e.properties.indexOf("reliableWrite")>=0,writableAuxiliaries:e.properties.indexOf("writableAuxiliaries")>=0}}),e.on("data",(e,t)=>{if(!0===t&&"function"==typeof this.charNotifies[r]){const t=this.bufferToDataView(e);this.charNotifies[r](t)}}))},this),r(i)}))}discoverDescriptors(e,t,r,i){const n=this.characteristicHandles[e];n.discoverDescriptors(this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=b(e.uuid);if(0===t.length||t.indexOf(r)>=0){const t=n.uuid+"-"+e.uuid;this.descriptorHandles[t]||(this.descriptorHandles[t]=e),i.push({uuid:r})}},this),r(i)}))}readCharacteristic(e,t,r){this.characteristicHandles[e].read(this.checkForError(r,e=>{const r=this.bufferToDataView(e);t(r)}))}writeCharacteristic(e,t,r,i){const n=this.dataViewToBuffer(t),s=this.characteristicHandles[e],a=s.properties.indexOf("writeWithoutResponse")>=0||s.properties.indexOf("authenticatedSignedWrites")>=0,o="darwin"!==this.os&&a?25:null;s.write(n,a,this.checkForError(i,r,o))}enableNotify(e,t,r,i){if(this.charNotifies[e])return this.charNotifies[e]=t,r();this.characteristicHandles[e].once("notify",n=>{if(!0!==n)return i("notify failed to enable");this.charNotifies[e]=t,r()}),this.characteristicHandles[e].notify(!0,this.checkForError(i))}disableNotify(e,t,r){if(!this.charNotifies[e])return t();this.characteristicHandles[e].once("notify",i=>{if(!1!==i)return r("notify failed to disable");this.charNotifies[e]&&delete this.charNotifies[e],t()}),this.characteristicHandles[e].notify(!1,this.checkForError(r))}readDescriptor(e,t,r){this.descriptorHandles[e].readValue(this.checkForError(r,e=>{const r=this.bufferToDataView(e);t(r)}))}writeDescriptor(e,t,r,i){const n=this.dataViewToBuffer(t);this.descriptorHandles[e].writeValue(n,this.checkForError(i,r))}}L.EVENT_ENABLED="enabledchanged";const P=new L;class S{constructor(e){this.characteristic=null,this.uuid=null,this._value=null,this.handle=null,this.characteristic=e.characteristic,this.uuid=e.uuid,this._value=e.value,this.handle=`${this.characteristic.uuid}-${this.uuid}`}get value(){return this._value}readValue(){return new Promise((e,t)=>{if(!this.characteristic.service.device.gatt.connected)return t("readValue error: device not connected");P.readDescriptor(this.handle,t=>{this._value=t,e(t)},e=>{t(`readValue error: ${e}`)})})}writeValue(e){return new Promise((t,r)=>{if(!this.characteristic.service.device.gatt.connected)return r("writeValue error: device not connected");const i=function(e){return void 0!==e.buffer}(e)?e.buffer:e,n=new DataView(i);P.writeDescriptor(this.handle,n,()=>{this._value=n,t()},e=>{r(`writeValue error: ${e}`)})})}}class k extends y{constructor(e){super(),this.service=null,this.uuid=null,this._value=null,this.handle=null,this.descriptors=null,this.service=e.service,this.uuid=e.uuid,this.properties=e.properties,this._value=e.value,this.handle=this.uuid}get value(){return this._value}setValue(e,t){this._value=e,t&&(this.dispatchEvent("characteristicvaluechanged",e),this.service.dispatchEvent("characteristicvaluechanged",e),this.service.device.dispatchEvent("characteristicvaluechanged",e),this.service.device._bluetooth.dispatchEvent("characteristicvaluechanged",e))}getDescriptor(e){return new Promise((t,r)=>this.service.device.gatt.connected?e?void this.getDescriptors(e).then(e=>{if(1!==e.length)return r("getDescriptor error: descriptor not found");t(e[0])}).catch(e=>{r(`getDescriptor error: ${e}`)}):r("getDescriptor error: no descriptor specified"):r("getDescriptor error: device not connected"))}getDescriptors(e){return new Promise((t,r)=>{if(!this.service.device.gatt.connected)return r("getDescriptors error: device not connected");function i(){if(!e)return t(this.descriptors);const i=this.descriptors.filter(t=>t.uuid===D(e));if(1!==i.length)return r("getDescriptors error: descriptor not found");t(i)}if(this.descriptors)return i.call(this);P.discoverDescriptors(this.handle,[],e=>{this.descriptors=e.map(e=>(Object.assign(e,{characteristic:this}),new S(e))),i.call(this)},e=>{r(`getDescriptors error: ${e}`)})})}readValue(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("readValue error: device not connected");P.readCharacteristic(this.handle,t=>{this.setValue(t,!0),e(t)},e=>{t(`readValue error: ${e}`)})})}writeValue(e){return new Promise((t,r)=>{if(!this.service.device.gatt.connected)return r("writeValue error: device not connected");const i=function(e){return void 0!==e.buffer}(e)?e.buffer:e,n=new DataView(i);P.writeCharacteristic(this.handle,n,()=>{this.setValue(n),t()},e=>{r(`writeValue error: ${e}`)})})}startNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("startNotifications error: device not connected");P.enableNotify(this.handle,e=>{this.setValue(e,!0)},()=>{e(this)},e=>{t(`startNotifications error: ${e}`)})})}stopNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("stopNotifications error: device not connected");P.disableNotify(this.handle,()=>{e(this)},e=>{t(`stopNotifications error: ${e}`)})})}}class O extends y{constructor(e){super(),this.device=null,this.uuid=null,this.isPrimary=!1,this.handle=null,this.services=null,this.characteristics=null,this.device=e.device,this.uuid=e.uuid,this.isPrimary=e.isPrimary,this.handle=this.uuid,this.dispatchEvent("serviceadded",void 0),this.device.dispatchEvent("serviceadded",void 0),this.device._bluetooth.dispatchEvent("serviceadded",void 0)}getCharacteristic(e){return new Promise((t,r)=>this.device.gatt.connected?e?void this.getCharacteristics(e).then(e=>{if(1!==e.length)return r("getCharacteristic error: characteristic not found");t(e[0])}).catch(e=>{r(`getCharacteristic error: ${e}`)}):r("getCharacteristic error: no characteristic specified"):r("getCharacteristic error: device not connected"))}getCharacteristics(e){return new Promise((t,r)=>{if(!this.device.gatt.connected)return r("getCharacteristics error: device not connected");function i(){if(!e)return t(this.characteristics);e=E(e);const i=this.characteristics.filter(t=>t.uuid===e);if(1!==i.length)return r("getCharacteristics error: characteristic not found");t(i)}if(this.characteristics)return i.call(this);P.discoverCharacteristics(this.handle,[],e=>{this.characteristics=e.map(e=>(Object.assign(e,{service:this}),new k(e))),i.call(this)},e=>{r(`getCharacteristics error: ${e}`)})})}getIncludedService(e){return new Promise((t,r)=>this.device.gatt.connected?e?void this.getIncludedServices(e).then(e=>{if(1!==e.length)return r("getIncludedService error: service not found");t(e[0])}).catch(e=>{r(`getIncludedService error: ${e}`)}):r("getIncludedService error: no service specified"):r("getIncludedService error: device not connected"))}getIncludedServices(e){return new Promise((t,r)=>{if(!this.device.gatt.connected)return r("getIncludedServices error: device not connected");function i(){if(!e)return t(this.services);const i=this.services.filter(t=>t.uuid===x(e));if(1!==i.length)return r("getIncludedServices error: service not found");t(i)}if(this.services)return i.call(this);P.discoverIncludedServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new O(e))),i.call(this)},e=>{r(`getIncludedServices error: ${e}`)})})}}class C{constructor(e){this.device=null,this._connected=!1,this.handle=null,this.services=null,this.device=e,this.handle=this.device.id}get connected(){return this._connected}connect(){return new Promise((e,t)=>{if(this.connected)return t("connect error: device already connected");P.connect(this.handle,()=>{this._connected=!0,e(this)},()=>{this.services=null,this._connected=!1,this.device.dispatchEvent("gattserverdisconnected",void 0),this.device._bluetooth.dispatchEvent("gattserverdisconnected",void 0)},e=>{t(`connect Error: ${e}`)})})}disconnect(){P.disconnect(this.handle),this._connected=!1}getPrimaryService(e){return new Promise((t,r)=>this.connected?e?void this.getPrimaryServices(e).then(e=>{if(1!==e.length)return r("getPrimaryService error: service not found");t(e[0])}).catch(e=>{r(`getPrimaryService error: ${e}`)}):r("getPrimaryService error: no service specified"):r("getPrimaryService error: device not connected"))}getPrimaryServices(e){return new Promise((t,r)=>{if(!this.connected)return r("getPrimaryServices error: device not connected");function i(){if(!e)return t(this.services);const i=this.services.filter(t=>t.uuid===x(e));if(1!==i.length)return r("getPrimaryServices error: service not found");t(i)}if(this.services)return i.call(this);P.discoverServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new O(e))),i.call(this)},e=>{r(`getPrimaryServices error: ${e}`)})})}}class V extends y{constructor(e){super(),this.id=null,this.name=null,this.gatt=null,this.watchingAdvertisements=!1,this._bluetooth=null,this._allowedServices=[],this._serviceUUIDs=[],this.id=e.id,this.name=e.name,this.gatt=e.gatt,this.watchAdvertisements=e.watchAdvertisements,this.adData=e.adData,this._bluetooth=e._bluetooth,this._allowedServices=e._allowedServices,this._serviceUUIDs=e._serviceUUIDs,this.name||(this.name=`Unknown or Unsupported Device (${this.id})`),this.gatt||(this.gatt=new C(this))}watchAdvertisements(){return new Promise((e,t)=>{t("watchAdvertisements error: method not implemented")})}unwatchAdvertisements(){return new Promise((e,t)=>{t("unwatchAdvertisements error: method not implemented")})}}class T extends y{constructor(e){super(),this.deviceFound=null,this.scanTime=10240,this.scanner=null,e=e||{},this.referringDevice=e.referringDevice,this.deviceFound=e.deviceFound,e.scanTime&&(this.scanTime=1e3*e.scanTime),P.on(L.EVENT_ENABLED,e=>{this.dispatchEvent("availabilitychanged",e)})}filterDevice(e,t,r){let i=!1;return e.filters.forEach(e=>{if(!e.name||e.name===t.name){if(e.namePrefix){if(!t.name||e.namePrefix.length>t.name.length)return;if(e.namePrefix!==t.name.substr(0,e.namePrefix.length))return}if(e.services){const i=e.services.map(x);if(!i.every(e=>t._serviceUUIDs.indexOf(e)>-1))return;r=r.concat(i)}i=!0}}),!!i&&t}getAvailability(){return new Promise((e,t)=>{P.getEnabled(t=>{e(t)})})}requestDevice(e){return new Promise((t,r)=>{if(e=e||{},null!==this.scanner)return r("requestDevice error: request in progress");if(!e.acceptAllDevices&&!this.deviceFound){if(!e.filters||0===e.filters.length)return r(new TypeError("requestDevice error: no filters specified"));if(e.filters.some(e=>0===Object.keys(e).length))return r(new TypeError("requestDevice error: empty filter specified"));if(e.filters.some(e=>void 0!==e.namePrefix&&""===e.namePrefix))return r(new TypeError("requestDevice error: empty namePrefix specified"))}let i=[];e.filters&&e.filters.forEach(e=>{e.services&&(i=i.concat(e.services.map(x)))}),i=i.filter((e,t,r)=>r.indexOf(e)===t);let n=!1;P.startScan(i,r=>{let i=[];function s(e){this.cancelRequest().then(()=>{t(e)})}if(e.filters&&(r=this.filterDevice(e,r,i)),r){n=!0,e.optionalServices&&(i=i.concat(e.optionalServices.map(x)));const t=i.filter((e,t,r)=>r.indexOf(e)===t);Object.assign(r,{_bluetooth:this,_allowedServices:t});const o=new V(r);function a(){s.call(this,o)}this.deviceFound&&!0!==this.deviceFound(o,a.bind(this))||s.call(this,o)}},()=>{this.scanner=setTimeout(()=>{this.cancelRequest().then(()=>{n||r("requestDevice error: no devices found")})},this.scanTime)},e=>r(`requestDevice error: ${e}`))})}cancelRequest(){return new Promise((e,t)=>{this.scanner&&(clearTimeout(this.scanner),this.scanner=null,P.stopScan()),e()})}}T.EVENT_AVAILABILITY="availabilitychanged";const H=new T;export{T as Bluetooth,V as BluetoothDevice,k as BluetoothRemoteGATTCharacteristic,S as BluetoothRemoteGATTDescriptor,C as BluetoothRemoteGATTServer,O as BluetoothRemoteGATTService,H as bluetooth,a as bluetoothCharacteristics,o as bluetoothDescriptors,s as bluetoothServices,b as getCanonicalUUID,E as getCharacteristicUUID,D as getDescriptorUUID,x as getServiceUUID};
//# sourceMappingURL=webbluetooth.esm.js.map
