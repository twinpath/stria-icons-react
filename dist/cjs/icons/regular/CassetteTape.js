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
var CassetteTape_exports = {};
__export(CassetteTape_exports, {
  default: () => CassetteTape_default
});
module.exports = __toCommonJS(CassetteTape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CassetteTapeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM157.045 432L176.25 384H399.75L418.955 432H157.045ZM528 416C528 424.822 520.822 432 512 432H468.014L470.281 431.094L438.281 351.094C434.625 341.969 425.812 336 416 336H160C150.188 336 141.375 341.969 137.719 351.094L105.719 431.094L107.986 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM400 160H176C140.654 160 112 188.652 112 224C112 259.346 140.654 288 176 288H400C435.348 288 464 259.346 464 224C464 188.652 435.348 160 400 160ZM176 240C167.178 240 160 232.822 160 224S167.178 208 176 208S192 215.178 192 224S184.822 240 176 240ZM338.264 240H237.736C239.068 234.857 240 229.559 240 224S239.068 213.143 237.736 208H338.264C336.932 213.143 336 218.441 336 224S336.932 234.857 338.264 240ZM400 240C391.178 240 384 232.822 384 224S391.178 208 400 208S416 215.178 416 224S408.822 240 400 240Z" })
  }
));
CassetteTapeRegular.displayName = "CassetteTapeRegular";
var CassetteTape_default = CassetteTapeRegular;
