var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CalendarHeart_exports = {};
__export(CalendarHeart_exports, {
  default: () => CalendarHeart_default
});
module.exports = __toCommonJS(CalendarHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarHeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V128C448 92.654 419.346 64 384 64ZM416 448C416 465.674 401.674 480 384 480H64C46.326 480 32 465.674 32 448V192H416V448ZM416 160H32V128C32 110.326 46.326 96 64 96H384C401.674 96 416 110.326 416 128V160ZM214.078 427.869C219.578 433.369 228.328 433.369 233.828 427.869L318.578 342.244C343.203 317.369 341.703 276.244 314.203 253.244C300.328 241.619 266.578 224.744 224.078 267.744C181.453 224.744 147.703 241.619 133.828 253.244C106.328 276.244 104.953 317.369 129.578 342.244L214.078 427.869ZM154.203 277.744C167.953 266.244 185.453 274.369 192.703 281.494L224.078 313.244L255.453 281.494C262.578 274.244 280.078 266.244 293.828 277.744C308.203 289.744 306.203 309.369 295.953 319.744L223.953 392.369L152.203 319.744C141.828 309.369 139.828 289.744 154.203 277.744Z" })
  }
));
CalendarHeartLight.displayName = "CalendarHeartLight";
var CalendarHeart_default = CalendarHeartLight;
