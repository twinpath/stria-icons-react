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
var PersonSnowmobiling_exports = {};
__export(PersonSnowmobiling_exports, {
  default: () => PersonSnowmobiling_default
});
module.exports = __toCommonJS(PersonSnowmobiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSnowmobilingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 256C106.938 256 109.781 254.375 111.172 251.531L153.844 165.125C161.453 150.063 175.938 139.438 192.531 136.688C209.297 133.875 226.344 139.5 238.141 151.281L290.531 205.563C292.031 207.125 294.109 208 296.281 208H320C324.422 208 328 204.406 328 200S324.422 192 320 192H299.672L249.547 140.062C234.016 124.531 211.766 117.531 189.953 120.875C168.312 124.469 149.469 138.312 139.531 157.969L96.828 244.469C94.875 248.406 96.5 253.219 100.453 255.188C101.594 255.75 102.797 256 104 256ZM637.656 442.344C634.531 439.219 629.469 439.219 626.344 442.344L617.203 451.469C601.354 467.336 582.447 478.807 561.994 486.305L490.357 407.506L565.406 359.156C572.016 354.875 575.969 347.75 575.969 340.031V267.375C575.969 258.5 570.969 250.594 562.734 246.688L390.205 169.988L359.422 93.031C357.781 88.938 353.141 86.938 349.031 88.563C344.922 90.219 342.938 94.875 344.578 98.969L374.781 174.475L284.766 280H105.797L105.984 280.125H102.125C87.172 280.125 73.797 288.125 67.234 300.937L42.719 348.312C40.687 352.25 42.234 357.062 46.156 359.094C50.016 361.156 54.891 359.625 56.938 355.688L81.469 308.25C85.297 300.781 93.203 296.125 102.125 296.125H158.75L158.562 296H292.141L386.203 185.75L556.062 261.219C558.469 262.375 559.969 264.719 559.969 267.375V340.031C559.969 342.281 558.75 344.406 556.734 345.719L472.453 400H352C347.578 400 344 403.594 344 408S347.578 416 352 416H476.465L545.043 491.438C533.562 494.166 521.82 496 509.719 496H424C419.578 496 416 499.594 416 504S419.578 512 424 512H509.719C577.487 512 621.706 469.601 628.516 462.781L637.656 453.656C640.781 450.531 640.781 445.469 637.656 442.344ZM256 384H64C28.654 384 0 412.654 0 448S28.654 512 64 512H256C291.348 512 320 483.346 320 448S291.348 384 256 384ZM256 496H64C37.533 496 16 474.467 16 448S37.533 400 64 400H256C282.467 400 304 421.533 304 448S282.467 496 256 496ZM236 104C264.719 104 288 80.719 288 52S264.719 0 236 0S184 23.281 184 52S207.281 104 236 104ZM236 16C255.852 16 272 32.148 272 52C272 71.85 255.852 88 236 88C216.15 88 200 71.85 200 52C200 32.148 216.15 16 236 16Z" })
  }
));
PersonSnowmobilingThin.displayName = "PersonSnowmobilingThin";
var PersonSnowmobiling_default = PersonSnowmobilingThin;
