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
var BatteryBolt_exports = {};
__export(BatteryBolt_exports, {
  default: () => BatteryBolt_default
});
module.exports = __toCommonJS(BatteryBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryBoltThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 400H64C37.49 400 16 378.51 16 352V160C16 133.49 37.49 112 64 112H200C204.418 112 208 108.418 208 104S204.418 96 200 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H152C156.418 416 160 412.418 160 408S156.418 400 152 400ZM544 192H528V160C528 124.652 499.346 96 464 96H360C355.582 96 352 99.582 352 104S355.582 112 360 112H464C490.51 112 512 133.49 512 160V352C512 378.51 490.51 400 464 400H312C307.582 400 304 403.582 304 408S307.582 416 312 416H464C499.346 416 528 387.346 528 352V320H544C561.674 320 576 305.672 576 288V224C576 206.326 561.674 192 544 192ZM560 288C560 296.822 552.822 304 544 304H528V208H544C552.822 208 560 215.178 560 224V288ZM359.219 252.547C357.875 249.766 355.094 248 352 248H176.688L339.969 45.016C342.75 41.578 342.219 36.531 338.75 33.766C335.344 31 330.281 31.562 327.531 34.984L153.781 250.984C151.844 253.391 151.469 256.672 152.781 259.453C154.125 262.234 156.906 264 160 264H335.312L172.031 466.984C169.25 470.422 169.781 475.469 173.25 478.234C174.719 479.422 176.5 480 178.25 480C180.594 480 182.906 478.984 184.469 477.016L358.219 261.016C360.156 258.609 360.531 255.328 359.219 252.547Z" })
  }
));
BatteryBoltThin.displayName = "BatteryBoltThin";
var BatteryBolt_default = BatteryBoltThin;
