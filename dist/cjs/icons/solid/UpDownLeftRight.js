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
const UpDownLeftRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 262.797 509.109 269.281 504.062 273.844L424.062 345.844C419.562 349.891 413.812 352 408 352C404.688 352 401.375 351.312 398.234 349.922C389.578 346.062 384 337.484 384 328V288H288V384H328C337.484 384 346.062 389.578 349.922 398.234S352.172 417.016 345.844 424.062L273.844 504.062C269.281 509.109 262.797 512 256 512S242.719 509.109 238.156 504.062L166.156 424.062C159.828 417.016 158.219 406.891 162.078 398.234S174.516 384 184 384H224V288H128V328C128 337.484 122.422 346.062 113.766 349.922C110.625 351.312 107.312 352 104 352C98.188 352 92.438 349.891 87.938 345.844L7.938 273.844C2.891 269.281 0 262.797 0 256S2.891 242.719 7.938 238.156L87.938 166.156C95 159.812 105.125 158.266 113.766 162.078C122.422 165.938 128 174.516 128 184V224H224V128H184C174.516 128 165.938 122.422 162.078 113.766S159.828 94.984 166.156 87.938L238.156 7.938C247.281 -2.156 264.719 -2.156 273.844 7.938L345.844 87.938C352.172 94.984 353.781 105.109 349.922 113.766S337.484 128 328 128H288V224H384V184C384 174.516 389.578 165.938 398.234 162.078C406.891 158.266 417 159.812 424.062 166.156L504.062 238.156C509.109 242.719 512 249.203 512 256Z" })
  }
));
UpDownLeftRightSolid.displayName = "UpDownLeftRightSolid";
var UpDownLeftRight_default = UpDownLeftRightSolid;
