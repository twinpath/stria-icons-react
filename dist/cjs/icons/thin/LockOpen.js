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
var LockOpen_exports = {};
__export(LockOpen_exports, {
  default: () => LockOpen_default
});
module.exports = __toCommonJS(LockOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LockOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.587 0.158C372.816 3.53 320 62.853 320 131.706L320 224H64C28.654 224 0 252.654 0 288V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V288C448 252.654 419.346 224 384 224H336L336 131.255C336 71.024 382.184 19.118 442.341 16.14C506.65 12.957 560 64.374 560 128V216C560 220.418 563.582 224 568 224L568 224C572.418 224 576 220.418 576 216V128C576 55.296 515.084 -3.447 441.587 0.158ZM384 240C410.469 240 432 261.531 432 288V448C432 474.469 410.469 496 384 496H64C37.531 496 16 474.469 16 448V288C16 261.531 37.531 240 64 240H384Z" })
  }
));
LockOpenThin.displayName = "LockOpenThin";
var LockOpen_default = LockOpenThin;
