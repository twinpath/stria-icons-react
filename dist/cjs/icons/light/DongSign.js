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
var DongSign_exports = {};
__export(DongSign_exports, {
  default: () => DongSign_default
});
module.exports = __toCommonJS(DongSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DongSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448ZM192 400C230.41 400 264.52 382.646 288 355.77V384C288 392.844 295.156 400 304 400S320 392.844 320 384V112H336C344.844 112 352 104.844 352 96S344.844 80 336 80H320V48C320 39.156 312.844 32 304 32S288 39.156 288 48V80H208C199.156 80 192 87.156 192 96S199.156 112 208 112H288V188.23C264.52 161.354 230.41 144 192 144C121.422 144 64 201.406 64 272S121.422 400 192 400ZM192 176C244.938 176 288 219.062 288 272S244.938 368 192 368S96 324.938 96 272S139.062 176 192 176Z" })
  }
));
DongSignLight.displayName = "DongSignLight";
var DongSign_default = DongSignLight;
