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
const RectangleTerminalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V96C512 60.656 483.346 32 448 32ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V416ZM240 256C240 251.344 237.953 246.906 234.406 243.844L122.406 147.844C115.734 142.125 105.625 142.906 99.859 149.594S94.875 166.406 101.594 172.156L199.422 256L101.594 339.844C94.875 345.594 94.094 355.719 99.859 362.406C103.016 366.094 107.5 368 112 368C115.688 368 119.391 366.719 122.406 364.156L234.406 268.156C237.953 265.094 240 260.656 240 256ZM400 352H240C231.156 352 224 359.156 224 368S231.156 384 240 384H400C408.844 384 416 376.844 416 368S408.844 352 400 352Z" })
  }
));
RectangleTerminalLight.displayName = "RectangleTerminalLight";
var RectangleTerminal_default = RectangleTerminalLight;
