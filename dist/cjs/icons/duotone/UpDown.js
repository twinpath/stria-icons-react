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
var UpDown_exports = {};
__export(UpDown_exports, {
  default: () => UpDown_default
});
module.exports = __toCommonJS(UpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M253.999 366.742C257.811 375.492 256.077 385.68 249.593 392.664L145.593 504.664C136.499 514.445 119.499 514.445 110.405 504.664L6.405 392.664C-0.079 385.68 -1.814 375.492 1.999 366.742S14.452 352.336 23.999 352.336H79.999V256.336H175.999V352.336H231.999C241.546 352.336 250.186 357.992 253.999 366.742Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.999 145.594C-1.814 136.844 -0.079 126.656 6.405 119.672L110.405 7.672C119.499 -2.109 136.499 -2.109 145.593 7.672L249.593 119.672C256.077 126.656 257.811 136.844 253.999 145.594C250.186 154.344 241.546 160 231.999 160H175.999V256H79.999V160H23.999C14.452 160 5.811 154.344 1.999 145.594Z" })
    ]
  }
));
UpDownDuotone.displayName = "UpDownDuotone";
var UpDown_default = UpDownDuotone;
