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
var LeftRight_exports = {};
__export(LeftRight_exports, {
  default: () => LeftRight_default
});
module.exports = __toCommonJS(LeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.328 238.406L392.328 134.406C385.344 127.922 375.156 126.188 366.406 130S352 142.453 352 152V240H160V152C160 142.453 154.344 133.812 145.594 130S126.656 127.922 119.672 134.406L7.672 238.406C2.557 243.156 0 249.578 0 256S2.557 268.844 7.672 273.594L119.672 377.594C126.656 384.078 136.844 385.812 145.594 382S160 369.547 160 360V272H352V360C352 369.547 357.656 378.188 366.406 382S385.344 384.078 392.328 377.594L504.328 273.594C509.443 268.844 512 262.422 512 256S509.443 243.156 504.328 238.406ZM128 341.656L35.752 256L128 170.34V341.656ZM384 341.656V170.34L476.248 256L384 341.656Z" })
  }
));
LeftRightLight.displayName = "LeftRightLight";
var LeftRight_default = LeftRightLight;
