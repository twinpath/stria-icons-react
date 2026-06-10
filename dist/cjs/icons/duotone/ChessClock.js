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
var ChessClock_exports = {};
__export(ChessClock_exports, {
  default: () => ChessClock_default
});
module.exports = __toCommonJS(ChessClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessClockDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.25 224.125H172.25C165.625 224.125 160.25 229.5 160.25 236.125V308.125C160.25 314.75 165.625 320.125 172.25 320.125H180.25C186.875 320.125 192.25 314.75 192.25 308.125V236.125C192.25 229.5 186.875 224.125 180.25 224.125ZM519.375 243C517.125 240.75 514.125 239.5 510.875 239.5C507.75 239.5 504.625 240.75 502.375 243L451.5 293.875C449.25 296.125 448 299.25 448 302.375C448 305.625 449.25 308.625 451.5 310.875L457.125 316.5C459.375 318.75 462.5 320.125 465.625 320.125C468.875 320.125 471.875 318.75 474.125 316.5L525 265.625C527.25 263.375 528.5 260.25 528.5 257.125C528.5 253.875 527.25 250.875 525 248.625L519.375 243ZM240 32H112C103.125 32 96 39.125 96 48V64C96 72.75 103.125 80 112 80H152.125V128H200.125V80H240C248.875 80 256 72.75 256 64V48C256 39.125 248.875 32 240 32ZM527.875 96H399.875C391.125 96 383.875 103.125 383.875 112V128H543.875V112C543.875 103.125 536.75 96 527.875 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M600 128H40C17.875 128 0 145.875 0 168V440C0 462.125 17.875 480 40 480H600C622.125 480 640 462.125 640 440V168C640 145.875 622.125 128 600 128ZM176.375 416C114.5 416 64.375 365.875 64.375 304S114.5 192 176.375 192C238.25 192.125 288.375 242.25 288.375 304.125C288.375 366 238.125 416.125 176.375 416ZM464.375 416C402.5 416 352.375 365.875 352.375 304S402.5 192 464.375 192C526.25 192.125 576.375 242.25 576.375 304.125C576.375 366 526.125 416.125 464.375 416Z" })
    ]
  }
));
ChessClockDuotone.displayName = "ChessClockDuotone";
var ChessClock_default = ChessClockDuotone;
