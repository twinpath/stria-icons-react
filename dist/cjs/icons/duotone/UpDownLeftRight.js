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
var UpDownLeftRight_exports = {};
__export(UpDownLeftRight_exports, {
  default: () => UpDownLeftRight_default
});
module.exports = __toCommonJS(UpDownLeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpDownLeftRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M183.982 128.008H223.982V224H287.982V128.008H327.982C337.466 128.008 346.044 122.43 349.904 113.773C351.294 110.633 351.982 107.32 351.982 104.008C351.982 98.195 349.873 92.445 345.826 87.945L273.826 7.945C269.263 2.898 262.779 0.008 255.982 0.008S242.701 2.898 238.138 7.945L166.138 87.945C159.794 95.008 158.248 105.117 162.06 113.773C165.919 122.43 174.498 128.008 183.982 128.008ZM327.982 384.008H287.982V288H223.982V384.008H183.982C174.498 384.008 165.919 389.586 162.06 398.242C158.248 406.883 159.794 417.008 166.138 424.07L238.138 504.07C242.701 509.117 249.185 512.008 255.982 512.008S269.263 509.117 273.826 504.07L345.826 424.07C349.873 419.57 351.982 413.82 351.982 408.008C351.982 404.695 351.294 401.383 349.904 398.242C346.044 389.586 337.466 384.008 327.982 384.008Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 262.797 509.109 269.281 504.062 273.844L424.062 345.844C419.562 349.891 413.812 352 408 352C404.688 352 401.375 351.312 398.234 349.922C389.578 346.062 384 337.484 384 328V288H128V328C128 337.484 122.422 346.062 113.766 349.922C110.625 351.312 107.312 352 104 352C98.188 352 92.438 349.891 87.938 345.844L7.938 273.844C2.891 269.281 0 262.797 0 256S2.891 242.719 7.938 238.156L87.938 166.156C95 159.812 105.125 158.266 113.766 162.078C122.422 165.938 128 174.516 128 184V224H384V184C384 174.516 389.578 165.938 398.234 162.078C406.891 158.266 417 159.812 424.062 166.156L504.062 238.156C509.109 242.719 512 249.203 512 256Z" })
    ]
  }
));
UpDownLeftRightDuotone.displayName = "UpDownLeftRightDuotone";
var UpDownLeftRight_default = UpDownLeftRightDuotone;
