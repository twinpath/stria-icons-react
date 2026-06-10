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
var CameraPolaroid_exports = {};
__export(CameraPolaroid_exports, {
  default: () => CameraPolaroid_default
});
module.exports = __toCommonJS(CameraPolaroid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraPolaroidRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 128C243.875 128 208 163.875 208 208S243.875 288 288 288S368 252.125 368 208C367.875 163.875 332.125 128.125 288 128ZM288 240C270.375 240 256 225.625 256 208S270.375 176 288 176S320 190.375 320 208S305.625 240 288 240ZM565.263 335.951L512 256V96C512 60.654 483.346 32 448 32H128C92.654 32 64 60.654 64 96V256L10.737 335.951C3.736 346.461 0 358.806 0 371.434V416C0 451.2 28.8 480 64 480H512C547.2 480 576 451.2 576 416V371.434C576 358.806 572.264 346.461 565.263 335.951ZM112 270.5V96C112 87.163 119.163 80 128 80H448C456.837 80 464 87.163 464 96V270.5L507.625 336H68.375L112 270.5ZM512 432H64C55.163 432 48 424.837 48 416V384H528V416C528 424.837 520.837 432 512 432ZM424 112H392C387.625 112 384 115.625 384 120V152C384 156.375 387.625 160 392 160H424C428.375 160 432 156.375 432 152V120C432 115.625 428.375 112 424 112Z" })
  }
));
CameraPolaroidRegular.displayName = "CameraPolaroidRegular";
var CameraPolaroid_default = CameraPolaroidRegular;
