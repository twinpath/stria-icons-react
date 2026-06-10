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
var ClipboardListCheck_exports = {};
__export(ClipboardListCheck_exports, {
  default: () => ClipboardListCheck_default
});
module.exports = __toCommonJS(ClipboardListCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardListCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H256C291.346 64 320 92.652 320 128V144C320 152.836 312.836 160 304 160H80C71.164 160 64 152.836 64 144V128C64 92.652 92.654 64 128 64H48C21.49 64 0 85.49 0 112V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V112C384 85.49 362.51 64 336 64ZM96 424C82.75 424 72 413.25 72 400S82.75 376 96 376S120 386.75 120 400S109.25 424 96 424ZM112 320C107.906 320 103.812 318.438 100.688 315.312L68.688 283.312C62.438 277.062 62.438 266.937 68.688 260.688S85.063 254.438 91.312 260.688L112 281.375L164.688 228.688C170.938 222.438 181.063 222.438 187.312 228.688S193.562 245.063 187.312 251.312L123.312 315.312C120.188 318.438 116.094 320 112 320ZM304 416H176C167.199 416 160 408.799 160 400C160 391.199 167.199 384 176 384H304C312.801 384 320 391.199 320 400C320 408.799 312.801 416 304 416ZM304 320H208C199.199 320 192 312.799 192 304C192 295.199 199.199 288 208 288H304C312.801 288 320 295.199 320 304C320 312.799 312.801 320 304 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64ZM192 88C178.746 88 168 77.254 168 64C168 50.744 178.746 40 192 40S216 50.744 216 64C216 77.254 205.254 88 192 88ZM96 376C82.75 376 72 386.75 72 400S82.75 424 96 424S120 413.25 120 400S109.25 376 96 376ZM164.688 228.688L112 281.375L91.312 260.688C85.062 254.438 74.937 254.438 68.688 260.688S62.438 277.063 68.688 283.312L100.688 315.312C103.812 318.438 107.906 320 112 320S120.188 318.438 123.312 315.312L187.312 251.312C193.562 245.062 193.562 234.937 187.312 228.688S170.938 222.438 164.688 228.688Z" })
    ]
  }
));
ClipboardListCheckDuotone.displayName = "ClipboardListCheckDuotone";
var ClipboardListCheck_default = ClipboardListCheckDuotone;
