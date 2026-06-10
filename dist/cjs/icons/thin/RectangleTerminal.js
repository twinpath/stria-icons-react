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
var RectangleTerminal_exports = {};
__export(RectangleTerminal_exports, {
  default: () => RectangleTerminal_default
});
module.exports = __toCommonJS(RectangleTerminal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleTerminalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V96C512 60.656 483.346 32 448 32ZM496 416C496 442.469 474.467 464 448 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H448C474.467 48 496 69.531 496 96V416ZM221.438 250.125L109.438 146.125C106.234 143.188 101.188 143.281 98.141 146.562C95.125 149.781 95.312 154.844 98.562 157.875L204.25 256L98.562 354.125C95.312 357.156 95.125 362.219 98.141 365.437C99.719 367.156 101.859 368 104 368C105.953 368 107.906 367.281 109.438 365.875L221.438 261.875C223.078 260.344 224 258.219 224 256S223.078 251.656 221.438 250.125ZM408 368H232C227.578 368 224 371.594 224 376S227.578 384 232 384H408C412.422 384 416 380.406 416 376S412.422 368 408 368Z" })
  }
));
RectangleTerminalThin.displayName = "RectangleTerminalThin";
var RectangleTerminal_default = RectangleTerminalThin;
