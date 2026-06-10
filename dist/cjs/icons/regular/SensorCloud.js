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
var SensorCloud_exports = {};
__export(SensorCloud_exports, {
  default: () => SensorCloud_default
});
module.exports = __toCommonJS(SensorCloud_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorCloudRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M572.612 321.25C581.362 299.125 572.487 273.875 551.737 262.125C530.988 250.5 504.738 255.75 490.239 274.625C474.989 236.125 432.865 215.625 393.116 227.5S329.242 279.625 337.617 320.125C337.117 320.125 336.492 320 335.992 320C291.868 320 255.994 355.875 255.994 400S291.868 480 335.992 480H559.987C601.736 480.125 636.485 448.125 639.735 406.5C643.11 364.875 613.861 327.75 572.612 321.25ZM175.996 152V264C175.996 277.25 186.746 288 199.995 288S223.995 277.25 223.995 264V152C223.995 138.75 213.245 128 199.995 128S175.996 138.75 175.996 152ZM63.999 432C55.124 432 47.999 424.875 47.999 416V96C47.999 87.125 55.124 80 63.999 80H383.991C392.866 80 399.991 87.125 399.991 96V193.5C405.241 192.625 410.616 192.125 415.99 192C427.115 192 437.74 194.125 447.99 197.25V96C447.99 60.625 419.365 32 383.991 32H63.999C28.624 32 0 60.625 0 96V416C0 451.375 28.624 480 63.999 480H257.869C244.369 466.625 234.495 450.125 229.245 432H63.999ZM95.998 152V264C95.998 277.25 106.748 288 119.997 288S143.997 277.25 143.997 264V152C143.997 138.75 133.247 128 119.997 128S95.998 138.75 95.998 152Z" })
  }
));
SensorCloudRegular.displayName = "SensorCloudRegular";
var SensorCloud_default = SensorCloudRegular;
