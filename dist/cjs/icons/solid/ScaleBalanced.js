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
var ScaleBalanced_exports = {};
__export(ScaleBalanced_exports, {
  default: () => ScaleBalanced_default
});
module.exports = __toCommonJS(ScaleBalanced_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleBalancedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.879 154.5C537.254 119.25 486.754 119.125 469.004 154.5C382.004 328.75 384.004 320.375 384.004 336C384.004 380.125 441.254 416 512.004 416S640.004 380.125 640.004 336C640.004 319.875 641.379 327.25 554.879 154.5ZM440.004 320L512.004 176L584.004 320H440.004ZM256.004 336C256.004 319.875 257.379 327.25 170.879 154.5C153.254 119.25 102.754 119.125 85.004 154.5C-1.996 328.75 0.004 320.375 0.004 336C0.004 380.125 57.254 416 128.004 416S256.004 380.125 256.004 336ZM128.004 176L200.004 320H56.004L128.004 176ZM496.004 448H352.004V153.25C375.504 143 393.129 121.75 398.379 96H512.004C529.678 96 544.004 81.674 544.004 64S529.678 32 512.004 32H383.629C369.004 12.625 346.129 0 320.004 0S271.004 12.625 256.379 32H128.004C110.33 32 96.004 46.326 96.004 64S110.33 96 128.004 96H241.629C246.879 121.75 264.504 143 288.004 153.25V448H144.004C117.494 448 96.004 469.49 96.004 496C96.004 504.836 103.168 512 112.004 512H528.004C536.84 512 544.004 504.836 544.004 496C544.004 469.49 522.514 448 496.004 448Z" })
  }
));
ScaleBalancedSolid.displayName = "ScaleBalancedSolid";
var ScaleBalanced_default = ScaleBalancedSolid;
