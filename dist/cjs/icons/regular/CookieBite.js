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
var CookieBite_exports = {};
__export(CookieBite_exports, {
  default: () => CookieBite_default
});
module.exports = __toCommonJS(CookieBite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CookieBiteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.002 320C334.377 320 320.002 334.375 320.002 352S334.377 384 352.002 384S384.002 369.625 384.002 352S369.627 320 352.002 320ZM192.002 192C192.002 174.375 177.627 160 160.002 160S128.002 174.375 128.002 192S142.377 224 160.002 224S192.002 209.625 192.002 192ZM192.002 320C174.377 320 160.002 334.375 160.002 352S174.377 384 192.002 384C209.627 384 224.002 369.625 224.002 352S209.627 320 192.002 320ZM288.002 224C270.377 224 256.002 238.375 256.002 256S270.377 288 288.002 288S320.002 273.625 320.002 256S305.627 224 288.002 224ZM510.502 255.875C440.502 255 384.002 198.125 384.002 128C313.877 128 257.002 71.5 256.252 1.5C249.627 0.5 242.877 0 236.252 0C215.627 0 195.127 4.875 176.502 14.375L107.377 49.5C82.502 62.25 62.252 82.5 49.502 107.375L14.502 176.25C1.752 201.25 -2.748 229.5 1.627 257.25L13.752 333.5C18.127 361.125 31.127 386.625 50.877 406.375L105.627 461.25C125.377 480.875 150.752 493.875 178.377 498.25L255.002 510.375C261.877 511.5 268.877 512 275.752 512C296.377 512 317.002 507.125 335.627 497.625L404.752 462.375C429.627 449.75 449.877 429.5 462.502 404.625L497.627 335.75C510.127 311.125 514.627 283.125 510.502 255.875ZM454.877 313.875L419.752 382.75C411.627 398.75 398.877 411.5 382.877 419.625L313.752 454.875C302.002 460.875 288.877 464 275.752 464C271.377 464 266.877 463.625 262.627 463L185.877 450.875C168.252 448 152.252 439.875 139.627 427.25L84.752 372.5C72.127 359.75 63.877 343.75 61.127 326L49.002 249.75C46.252 231.875 49.002 214.125 57.252 198L92.377 129.125C100.502 113.25 113.252 100.5 129.127 92.375L198.252 57.125C203.752 54.25 209.627 52.125 215.627 50.625C233.502 109.5 281.502 155.5 341.377 170.75C356.502 230.5 402.502 278.5 461.502 296.375C459.877 302.5 457.752 308.375 454.877 313.875Z" })
  }
));
CookieBiteRegular.displayName = "CookieBiteRegular";
var CookieBite_default = CookieBiteRegular;
