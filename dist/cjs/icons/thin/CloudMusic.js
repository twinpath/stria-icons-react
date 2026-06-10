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
var CloudMusic_exports = {};
__export(CloudMusic_exports, {
  default: () => CloudMusic_default
});
module.exports = __toCommonJS(CloudMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudMusicThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M372.797 192.646L244.797 248.646C241.875 249.928 240 252.803 240 255.99V360.295C231.494 355.186 220.35 351.99 208 351.99C181.49 351.99 160 366.318 160 383.99S181.49 415.99 208 415.99S256 401.662 256 383.99V261.209L368 212.209V328.295C359.494 323.186 348.35 319.99 336 319.99C309.49 319.99 288 334.318 288 351.99S309.49 383.99 336 383.99S384 369.662 384 351.99V199.99C384 197.303 382.641 194.771 380.375 193.303C378.156 191.803 375.25 191.615 372.797 192.646ZM208 399.99C188.467 399.99 176 390.514 176 383.99S188.467 367.99 208 367.99C227.535 367.99 240 377.467 240 383.99S227.535 399.99 208 399.99ZM336 367.99C316.467 367.99 304 358.514 304 351.99S316.467 335.99 336 335.99C355.535 335.99 368 345.467 368 351.99S355.535 367.99 336 367.99ZM537.594 226.594C541.688 215.906 544 204.203 544 192C544 139 501 96 448 96C428.312 96 409.906 102 394.688 112.203C367 64.203 315.312 32 256 32C167.594 32 96 103.594 96 192C96 194.703 96.094 197.406 96.188 200.094C40.188 219.797 0 273.203 0 336C0 415.5 64.5 480 144 480H512C582.688 480 640 422.703 640 352C640 290.094 596 238.406 537.594 226.594ZM512 464H144C73.42 464 16 406.578 16 336C16 281.73 50.359 233.18 101.498 215.186L112.588 211.285L112.178 199.535C112.09 197.033 112 194.516 112 192C112 112.598 176.598 48 256 48C307.309 48 355.141 75.664 380.828 120.197L389.381 135.023L403.598 125.492C416.764 116.666 432.117 112 448 112C492.111 112 528 147.887 528 192C528 201.893 526.201 211.605 522.652 220.869L515.889 238.527L534.422 242.275C586.326 252.773 624 298.92 624 352C624 413.756 573.758 464 512 464Z" })
  }
));
CloudMusicThin.displayName = "CloudMusicThin";
var CloudMusic_default = CloudMusicThin;
