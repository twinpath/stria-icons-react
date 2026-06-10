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
var Lemon_exports = {};
__export(Lemon_exports, {
  default: () => Lemon_default
});
module.exports = __toCommonJS(Lemon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LemonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M427.897 52.102C407.77 31.867 380.313 26.836 362.264 37.336C310.633 67.418 203.654 -9.152 81.252 113.25C-41.152 235.656 35.418 342.633 5.338 394.266C-5.164 412.312 -0.133 439.766 20.104 459.895C40.231 480.133 67.688 485.164 85.736 474.664C137.367 444.582 244.346 521.152 366.748 398.75C489.152 276.344 412.582 169.367 442.662 117.734C453.164 99.688 448.133 72.23 427.897 52.102ZM211.906 127.531C167.563 138.688 106.656 199.594 95.531 243.906C93.688 251.156 87.188 256 80 256C78.719 256 77.406 255.844 76.094 255.531C67.531 253.375 62.344 244.656 64.469 236.094C78.625 179.812 147.781 110.656 204.094 96.469C212.75 94.438 221.344 99.531 223.531 108.094C225.688 116.656 220.469 125.344 211.906 127.531Z" })
  }
));
LemonSolid.displayName = "LemonSolid";
var Lemon_default = LemonSolid;
