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
var TreeLarge_exports = {};
__export(TreeLarge_exports, {
  default: () => TreeLarge_default
});
module.exports = __toCommonJS(TreeLarge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeLargeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M468.668 429.594L406.137 351.969C422.793 351.281 437.215 341.781 444.09 326.813C450.996 311.781 448.559 294.563 437.652 281.875L373.637 208H377.371C393.121 208 406.731 199.406 412.902 185.594C418.699 172.594 416.324 157.875 406.652 147.125L285.262 12.938C277.949 4.719 267.293 0 256.012 0H255.996C244.715 0 234.043 4.688 226.793 12.844L105.449 147.094C95.777 157.781 93.34 172.469 99.106 185.469C105.168 199.156 119.152 208 134.746 208H138.387L74.231 281.906C63.371 294.562 60.934 311.781 67.84 326.812C74.731 341.812 89.168 351.312 105.824 351.969L43.324 429.594C30.887 445 28.481 466.719 37.168 484.875C45.184 501.594 61.121 512 78.762 512H433.106C450.777 512 466.746 501.594 474.762 484.844C483.449 466.656 481.059 444.969 468.668 429.594ZM445.887 471.031C444.606 473.719 440.777 480 433.106 480H271.965V422.625L315.277 379.312C321.527 373.062 321.527 362.937 315.277 356.688S298.902 350.438 292.652 356.688L271.965 377.375V240C271.965 231.156 264.809 224 255.965 224S239.965 231.156 239.965 240V320.01L220.762 294.406C215.465 287.344 205.418 285.875 198.371 291.188C191.293 296.5 189.856 306.531 195.168 313.594L239.965 373.322V480H78.762C71.137 480 67.324 473.75 66.043 471.062C63.449 465.656 62.481 456.812 68.246 449.656L172.652 320H107.684C100.481 320 97.621 315 96.918 313.469C95.934 311.312 94.824 307.062 98.449 302.844L208.543 176H134.746C130.262 176 128.731 173.344 128.356 172.5C127.731 171.094 127.965 169.906 129.184 168.562L250.606 34.219C251.871 32.812 253.824 32 255.996 32C258.152 32 260.106 32.812 261.449 34.281L382.887 168.531C383.699 169.438 384.512 170.688 383.684 172.563C383.324 173.344 381.793 176 377.371 176H303.543L413.418 302.781C417.106 307.063 415.996 311.313 415.012 313.469C414.309 315 411.449 320 404.246 320H339.324L443.731 449.656H443.746C449.465 456.781 448.481 465.625 445.887 471.031Z" })
  }
));
TreeLargeLight.displayName = "TreeLargeLight";
var TreeLarge_default = TreeLargeLight;
