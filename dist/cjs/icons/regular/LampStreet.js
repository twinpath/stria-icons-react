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
var LampStreet_exports = {};
__export(LampStreet_exports, {
  default: () => LampStreet_default
});
module.exports = __toCommonJS(LampStreet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampStreetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.041 512C355.416 512 384.041 483.375 384.041 448H256.041C256.041 483.375 284.666 512 320.041 512ZM344.031 225.781H344V120C344 53.828 290.156 0 224 0H120C53.844 0 0 53.828 0 120V512H48V120C48 80.297 80.312 48 120 48H224C263.688 48 296 80.297 296 120V225.787C209.389 236.484 140.404 303.51 128.219 388.906C126.25 403.25 137.875 416 152.406 416H487.594C502.125 416 513.75 403.25 511.781 388.906C499.594 303.5 430.656 236.469 344.031 225.781ZM182.605 368C192.484 340.482 210.644 316.838 234.126 299.936C258.838 282.148 289.107 273.781 319.555 273.781H320.489C350.953 273.781 381.237 282.158 405.956 299.962C429.44 316.876 447.589 340.523 457.432 368H182.605Z" })
  }
));
LampStreetRegular.displayName = "LampStreetRegular";
var LampStreet_default = LampStreetRegular;
