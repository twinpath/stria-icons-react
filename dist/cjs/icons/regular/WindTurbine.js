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
var WindTurbine_exports = {};
__export(WindTurbine_exports, {
  default: () => WindTurbine_default
});
module.exports = __toCommonJS(WindTurbine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindTurbineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 464H327.478L326.627 438.459L276.64 379.582L279.455 464H232.545L236.918 332.793L216.984 309.312C212.468 303.688 206.64 300.5 200.39 299.812L190.031 298.691L184.521 464H152C138.746 464 128 474.744 128 488C128 501.254 138.746 512 152 512H360C373.254 512 384 501.254 384 488C384 474.744 373.254 464 360 464ZM398.687 425.793L310.338 243.479C304.41 229.881 304.146 214.48 309.607 200.689L382.886 21.625C386.103 13.514 382.136 4.33 374.025 1.113C367.301 -1.555 359.621 0.687 355.388 6.557L241.269 163.221C232.578 175.242 219.453 183.305 204.8 185.619L13.322 215.949C5.521 217.191 -0.164 224.002 0.004 231.898V232.129C0.183 240.059 6.217 246.627 14.103 247.479L203.83 268.008C218.584 269.602 232.092 277.008 241.369 288.586L371.677 442.082C376.64 448.271 385.422 449.824 392.207 445.711L392.396 445.592C399.15 441.494 401.838 433.037 398.687 425.793ZM256 248.008C242.744 248.008 232 237.264 232 224.01C232 210.754 242.744 200.01 256 200.01C269.254 200.01 279.998 210.754 279.998 224.01C279.998 237.264 269.254 248.008 256 248.008Z" })
  }
));
WindTurbineRegular.displayName = "WindTurbineRegular";
var WindTurbine_default = WindTurbineRegular;
