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
var Browsers_exports = {};
__export(Browsers_exports, {
  default: () => Browsers_default
});
module.exports = __toCommonJS(Browsers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrowsersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 448C467.578 448 464 451.594 464 456C464 478.062 446.062 496 424 496H72C41.125 496 16 470.875 16 440V152C16 129.938 33.938 112 56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V440C0 479.688 32.297 512 72 512H424C454.875 512 480 486.875 480 456C480 451.594 476.422 448 472 448ZM528 0H144C117.49 0 96 21.49 96 48V368C96 394.51 117.49 416 144 416H528C554.51 416 576 394.51 576 368V48C576 21.49 554.51 0 528 0ZM112 48C112 30.355 126.355 16 144 16H184V96H112V48ZM560 368C560 385.645 545.645 400 528 400H144C126.355 400 112 385.645 112 368V112H560V368ZM560 96H200V16H528C545.645 16 560 30.355 560 48V96Z" })
  }
));
BrowsersThin.displayName = "BrowsersThin";
var Browsers_default = BrowsersThin;
