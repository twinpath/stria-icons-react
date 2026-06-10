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
var CruzeiroSign_exports = {};
__export(CruzeiroSign_exports, {
  default: () => CruzeiroSign_default
});
module.exports = __toCommonJS(CruzeiroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CruzeiroSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M378.812 396.172C387.031 406.547 385.312 421.641 374.906 429.875C332.406 463.594 281.125 480.234 229.999 480.234C171.094 480.234 112.406 458.156 67.594 414.641C24 372.297 0 315.969 0 256S24 139.703 67.594 97.359C151.344 16.109 283.469 9.547 374.906 82.125C385.312 90.359 387.031 105.453 378.812 115.828C370.562 126.219 355.5 127.984 345.094 119.719C272.375 62.078 167.438 67.266 101.031 131.797C66.844 165.016 48 209.125 48 256S66.844 346.984 101.031 380.203C118.439 397.111 138.568 409.697 160 418.395V248C160 234.75 170.75 224 184 224C195.354 224 204.428 232.055 206.92 242.65C219.24 236.076 233.084 232 248 232C279.312 232 308.531 248.844 324.219 275.969C330.844 287.437 326.937 302.125 315.469 308.766C303.875 315.406 289.312 311.438 282.656 300C275.531 287.656 262.25 280 248 280C225.938 280 208 297.938 208 320V430.297C255.641 435.951 305.191 423.934 345.094 392.281C355.5 384.016 370.562 385.781 378.812 396.172Z" })
  }
));
CruzeiroSignRegular.displayName = "CruzeiroSignRegular";
var CruzeiroSign_default = CruzeiroSignRegular;
