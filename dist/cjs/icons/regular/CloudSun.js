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
var CloudSun_exports = {};
__export(CloudSun_exports, {
  default: () => CloudSun_default
});
module.exports = __toCommonJS(CloudSun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudSunRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.002 208C128.02 247.154 156.192 279.602 193.34 286.502C199.899 277.951 207.262 269.975 215.5 262.844C226.784 226.477 250.332 195.887 280.545 174.738C267.893 147.225 240.264 128.02 208 128.02C163.828 128.02 128.022 163.824 128.002 208ZM96.004 208C96.02 146.146 146.153 96.014 208 96.014C252.246 96.014 290.137 121.893 308.33 159.145C329.321 149.684 352.157 144 376 144C385.805 144 395.477 145.035 405.01 146.709L413.778 134.072C418.922 126.658 414.674 116.404 405.793 114.799L317.225 98.791L301.219 10.207C299.614 1.324 289.36 -2.922 281.946 2.225L208 53.545L134.055 2.225C126.641 -2.922 116.387 1.324 114.782 10.207L98.776 98.791L10.207 114.799C1.326 116.404 -2.922 126.658 2.223 134.072L53.512 208L2.223 281.928C-2.922 289.342 1.326 299.596 10.207 301.201L98.776 317.209L114.782 405.793C116.387 414.676 126.641 418.922 134.055 413.775L161.112 394.996C160.854 391.295 160 387.766 160 384C160 359.807 165.698 336.191 175.996 314.783C129.856 300.945 96.018 258.652 96.004 208ZM582.75 296.375C575.25 246.375 532 208 480 208C474.875 208 469.75 208.375 464.75 209.125C440.5 188 409.25 176 376 176C312 176 257.75 221.25 243.625 281.25C211.625 305.125 192 343 192 384C192 454.625 249.375 512 320 512H524C588 512 640 460 640 396C640 354.25 617.25 316.75 582.75 296.375ZM524 464H320C275.75 464 240 428.25 240 384C240 351.25 259.75 323 288.125 310.75C288.75 262.75 327.75 224 376 224C407.25 224 434.375 240.25 450.125 264.75C458.75 259.25 469 256 480 256C510.875 256 536 281.125 536 312C536 317.875 534.75 323.5 533.125 328.875C566.25 333.375 592 361.5 592 396C592 433.625 561.625 464 524 464Z" })
  }
));
CloudSunRegular.displayName = "CloudSunRegular";
var CloudSun_default = CloudSunRegular;
